let printingPress = (function () {
    let name = `Вестник номер`;

    let month = {
        jan: `Януари`,
        feb: `Февруари`,
        mar: `Март`,
        apr: `Април`,
        may: `Май`,
        jun: `Юни`,
        jul: `Юли`,
        aug: `Август`,
        sep: `Септември`,
        oct: `Октомври`,
        nov: `Ноември`,
        dec: `Декември`,

    };
    let year = {
        year2012: 2012,
        year2013: 2013,
        year2014: 2014,
        year2015: 2015,
        year2016: 2016,
        year2017: 2017,
        year2018: 2018,
        year2019: 2019,
        year2020: 2020,

    }
    let newspapers = [];

    newspapers = [{
        id: 163,
        month: month.dec,
        year: year.year2012
    }, {
        id: 165,
        month: month.apr,
        year: year.year2013
    }, {
        id: 167,
        month: month.jun,
        year: year.year2013
    }, {
        id: 168,
        month: month.sep,
        year: year.year2013
    }, {
        id: 169,
        month: month.nov,
        year: year.year2013
    }, {
        id: 170,
        month: month.dec,
        year: year.year2013
    }, {
        id: 171,
        month: `${month.feb} - ${month.mar}`,
        year: year.year2014
    }, {
        id: 172,
        month: `${month.apr}`,
        year: year.year2014
    }, {
        id: 173,
        month: `${month.may} `,
        year: year.year2014
    }, {
        id: 174,
        month: `${month.jun} - ${month.jul}`,
        year: year.year2014
    }, {
        id: 175,
        month: `${month.aug} - ${month.sep}`,
        year: year.year2014
    }, {
        id: 176,
        month: `${month.oct} - ${month.nov}`,
        year: year.year2014
    }, {
        id: 177,
        month: `${month.dec} ${year.year2014} - ${month.jan}`,
        year: year.year2015
    }, {
        id: 178,
        month: `${month.feb} - ${month.mar}`,
        year: year.year2015
    }, {
        id: 179,
        month: `${month.apr} `,
        year: year.year2015
    }, {
        id: 180,
        month: `${month.may} - ${month.jun}`,
        year: year.year2015
    }, {
        id: 181,
        month: `${month.jul} - ${month.aug}`,
        year: year.year2015
    }, {
        id: 182,
        month: `${month.sep} - ${month.oct}`,
        year: year.year2015
    }, {
        id: 183,
        month: `${month.nov} - ${month.dec}`,
        year: year.year2015
    }, {
        id: 184,
        month: `${month.jan} - ${month.feb}`,
        year: year.year2016
    }, {
        id: 185,
        month: `${month.mar} - ${month.apr}`,
        year: year.year2016
    }, {
        id: 186,
        month: `${month.may} - ${month.jun}`,
        year: year.year2016
    }, {
        id: 187,
        month: `${month.jul} - ${month.aug}`,
        year: year.year2016
    }, {
        id: 188,
        month: `${month.sep} - ${month.oct}`,
        year: year.year2016
    }, {
        id: 189,
        month: `${month.nov} - ${month.dec}`,
        year: year.year2016
    }, {
        id: 190,
        month: `${month.jan}`,
        year: year.year2017
    }, {
        id: 191,
        month: `${month.feb} - ${month.mar}`,
        year: year.year2017
    }, {
        id: 192,
        month: `${month.apr} - ${month.may}`,
        year: year.year2017
    }, {
        id: 193,
        month: `${month.jun} - ${month.jul}`,
        year: year.year2017
    }, {
        id: 194,
        month: `${month.aug} - ${month.sep}`,
        year: year.year2017
    }, {
        id: 195,
        month: `${month.oct}`,
        year: year.year2017
    }, {
        id: 196,
        month: `${month.nov}`,
        year: year.year2017
    }, {
        id: 197,
        month: `${month.dec} ${year.year2017} - ${month.jan}`,
        year: year.year2018
    }, {
        id: 198,
        month: `${month.feb} - ${month.mar}`,
        year: year.year2018
    }, {
        id: 199,
        month: `${month.apr}`,
        year: year.year2018
    }, {
        id: 200,
        month: `${month.may} - ${month.jun}`,
        year: year.year2018
    }, {
        id: 201,
        month: `${month.jul} - ${month.aug}`,
        year: year.year2018
    }, {
        id: 202,
        month: `${month.sep} - ${month.oct}`,
        year: year.year2018
    }, {
        id: 203,
        month: `${month.nov} - ${month.dec}`,
        year: year.year2018
    }, {
        id: 204,
        month: `${month.jan} - ${month.feb}`,
        year: year.year2019
    }, {
        id: 205,
        month: `${month.mar} - ${month.apr}`,
        year: year.year2019
    }, {
        id: 206,
        month: `${month.may} - ${month.jun}`,
        year: year.year2019
    }, {
        id: 207,
        month: `${month.sep}`,
        year: year.year2019
    }, {
        id: 208,
        month: `${month.oct} - ${month.nov}`,
        year: year.year2019
    }, {
        id: 209,
        month: `${month.dec}`,
        year: year.year2019
    }, {
        id: 210,
        month: `${month.jan} - ${month.feb}`,
        year: year.year2020
    }, {
        id: 211,
        month: `${month.mar} - ${month.apr}`,
        year: year.year2020
    }, {
        id: 212,
        month: `${month.may} - ${month.jun}`,
        year: year.year2020
    }];

    let df = document.createDocumentFragment();
    let $listgroup = $(`.list-group`);
    let li = $(`<li>`);
    let a = $(`<a>`);
    let paper = `vestnik_`;
    let link = ``;



    function createList() {
        for (let i = newspapers.length - 1; i > 0; i -= 1) {
            link = `../data/${paper}${newspapers[i].id}.pdf`;
            li.addClass(`list-group-item `)
                .addClass(`text-center`);
            a.attr(`href`, link)
                .attr(`target`, `_blank`);
            // .attr('download', `${paper}${newspapers[i].id}.pdf`);
            a.text(`${name} ${newspapers[i].id} ${newspapers[i].month} ${newspapers[i].year}`);
            a.appendTo(li);
            li.clone()
                .appendTo(df);
        }
        console.log(df);
        $listgroup.append(df);
    }


    createList();
}());

