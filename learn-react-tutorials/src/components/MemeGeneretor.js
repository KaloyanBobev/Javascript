import React from 'react';


class MemeGenerator extends React.Component {
    constructor() {
        super();
        this.state = {
            topText: "",
            bottomText: "",
            randomImg: "https://i.imgflip.com/4c0br1.jpg",
            allMemeImgs: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const { memes } = response.data

                this.setState({ allMemeImgs: memes })

            })

    }

    handleChange(event) {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length);
        const randMemeIngs = this.state.allMemeImgs[randNum].url
        this.setState({
            randomImg: randMemeIngs
        })
    }

    render() {
        return (
            <article>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="topText"
                        value={this.state.topText}
                        onChange={this.handleChange}
                        placeholder="top text"
                    />

                    <input
                        type="text"
                        name="bottomText"
                        value={this.state.bottomText}
                        onChange={this.handleChange}
                        placeholder="bottom text"
                    />

                    <button >Gen</button>
                </form>
                <div>
                    <h2>{this.state.topText}</h2>
                    <img src={this.state.randomImg} alt="" />
                    <h2>{this.state.bottomText}</h2>
                </div>


            </article>
        )
    }
}
export default MemeGenerator;