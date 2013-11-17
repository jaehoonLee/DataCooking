/**
 * Created by leejaehoon on 13. 11. 17..
 */
function convertFormat(data)
{
    ageKey={};
    yearKey={};
    yearsKey={};
    data.forEach(function(d)
    {
        ageKey[d.age] = d.year;
        yearsKey[d.year] = d.age
        yearKey[d.year + ', 남자'] = d.age;
        yearKey[d.year + ', 여자'] = d.age;

        d.year = +d.year;
        d.age = +d.age
        d.sex = +d.sex;
        d.people = +d.people;

    })
    ageNames = Object.keys(ageKey);
    yearNames = Object.keys(yearKey);
    years = Object.keys(yearsKey);

    color.domain(ageNames);

    convertData = [];
    years.forEach(function(year)
        {
            people1 = {}
            people2 = {}
            data.forEach(function(d)
                {

                    if(d.year == year)
                    {

                        if(d.sex == 1)
                            people1[d.age] = d.people
                        else
                            people2[d.age] = d.people
                    }


                }
            );

            convertData.push({year:year + ', 남자', value:people1})
            convertData.push({year:year + ', 여자', value:people2})
        }
    );

    convertData.forEach(function(d) {
        var y0 = 0;
        d.ages = color.domain().map(function(age) {
            console.log(age + " " + +d.value[age]);
            return {name: age, y0: y0, y1: y0 += +d.value[age]}; });
        d.total = d.ages[d.ages.length - 1].y1;
    });
}