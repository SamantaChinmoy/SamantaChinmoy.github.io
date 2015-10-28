(function main() {
    var cssClass = { /*cssclass object*/
            basicCalulator: {
                MainDiv: {
                    'width': '325px',
                    'height': '320px',
                    'margin-left': '20px',
                    'margin-top': '10px',
                    'padding': '20px 20px 9px',
                    'background': '#9dd2ea',
                    'border-radius': '3px',
                },
                topDiv: {
                    'float': 'left',
                    'overflow': 'hidden'
                },
                screen: {
                    'height': '40px',
                    'width': '212px',
                    'position': 'relative',
                    'float': 'right',
                    'padding': '0 -10px',
                    'background': 'rgba(0, 0, 0, 0.2)',
                    'border-radius': '3px',
                    'font-size': '17px',
                    'line-height': '40px',
                    'color': 'white',
                    'text-align': 'right',
                    'letter-spacing': '1px'
                },
                keys: {
                    'float': 'left',
                    'top': '0',
                    'position': 'relative',
                    'cursor': 'pointer',
                    'width': '60px',
                    'height': '36px',
                    'background': 'white',
                    'border-radius': '3px',
                    'box-shadow': '0px 4px rgba(0, 0, 0, 0.2)',
                    'margin': ' 0 7px 11px 10px',
                    'color': ' #888',
                    'line-height': '36px',
                    'text-align': 'center',

                }
            },
            allcalculator: {
                structure: {
                    'margin-top': '80px',
                    'margin-left': '100px',
                    'border': 'solid',
                    'width': '590px',
                    'height': '500px'
                },
                container: {
                    'width': '500px',
                    'height': '380px',
                    'margin-left': '20px',
                    'padding': '3%',
                    'margin-top': '20px',
                    'border': 'solid',
                    'border-width': '1px'
                },
                input: {
                    'height': '30px',
                    'width': '130px'
                },
                button: {
                    'margin-left': '100px',
                    'width': 'auto',
                    'background': '#9dd2ea',
                    'border-radius': '3px'
                },
                label: {
                    'font-size': '20px',
                    'font-family': 'Arial',
                    'color': 'green',
                    'margin-left': '0px'
                }
            }
        },
        radioButton = {
            label: ['Basic Calulator', 'Date Calculator', 'Mortgage Calculator'],
            id: ['Bc', 'dc', 'mc'],
            value: ['Bc', 'dac', 'moc'],
            function: {
                click: function() {
                    if (this.id == radioButton.id[0]) {
                        basiccal();
                    }

                    if (this.id == radioButton.id[1]) {

                        datecal();

                    } else if (this.id == radioButton.id[2]) {

                        mccal();

                    }
                }
            }
        },
        mc = { /*Mortgage Calulator*/
            label: ['Loan Amount', 'Rate Of Interest', 'Number Of Month', 'EMI'],
            id: ['Loan Amount', 'Rate Of Interest', 'Number Of Month', 'EMI'],
            function: {
                click: function() {
                    result();
                }
            }
        },
        dc = { /*Date Calculator*/
            label: ['Start Date', 'End Date', 'Date Difference', 'Current Date', 'Time Interval', 'The Date Is:'],
            id: ['Start Date', 'End Date', 'Date Difference', 'Currdate', 'timeinterval', 'dateis']
        };
    (function structure() { /*structure*/
        var container;
        container = createElement('div', document.body, {
            'id': 'container'
        }, null, cssClass.allcalculator.structure);
        radiobutton();
    })();

    function radiobutton() { /*radio button*/
        var i, radiodiv, span;
        for (i = 0; i < 3; i++) {
            cssClass.allcalculator.label['margin-left'] = '20px';
            span = createElement('span', container, null, null, cssClass.allcalculator.label);
            span.appendChild(document.createTextNode(radioButton.label[i]));
            radiodiv = createElement('input', container, {
                'type': 'radio',
                'id': radioButton.id[i],
                'name': 'radiobtn',
                'value': radioButton.value[i]
            }, radioButton.function, null);
        }
    }

    function basiccal() { /*Basic Calculator Layout*/
        if (document.getElementById('mcdiv') !== null) {
            document.getElementById('mcdiv').remove();
        }
        if (document.getElementById('datediv') !== null) {
            document.getElementById('datediv').remove();
        }
        if (document.getElementById('bcdiv') !== null) {
            return;
        }
        var btn = ['7', '8', '9', '+', '4', '5', '6', '-', '1', '2', '3', '/', '0', '.', '=', '*', 'M+', 'Mc', 'Mr', '%', 'bk'],
            bcdiv = createElement('div', container, {
                'id': 'bcdiv'
            }, null, cssClass.allcalculator.container),
            bcdivcon = createElement('div', bcdiv, {
                'id': 'calculator'
            }, null, cssClass.basicCalulator.MainDiv),
            top = createElement('div', bcdivcon, null, null, cssClass.basicCalulator.topDiv),
            span = createElement('span', top, null, null, cssClass.basicCalulator.keys),
            keys, table, i, j, c = 0,
            tr, td;
        span.appendChild(document.createTextNode("C"));
        createElement('div', top, {
            'id': 'screen'
        }, null, cssClass.basicCalulator.screen);
        keys = createElement('div', bcdivcon, null, null, null);
        table = createElement('table', keys, null, null, null), c = 0;
        for ( i = 0; i < 6; i++) {
            tr = table.insertRow(i);
            for (j = 0; j < 4; j++, c++) {
                td = tr.insertCell(0);
                createElement('span', keys, null, null, cssClass.basicCalulator.keys).appendChild(document.createTextNode(btn[c]));
                if (i == 5 && j === 0)
                    break;
            }
        }
        bcProcess();
    }

    function datecal() { /*date calculator layout*/
        var datediv, input, span, table, tr, td, c = 1,
            i,
            form_filed, caption, placeholder;
        if (document.getElementById('mcdiv') !== null) {
            document.getElementById('mcdiv').remove();
        }
        if (document.getElementById('bcdiv') !== null) {
            document.getElementById('bcdiv').remove();
        }
        if (document.getElementById('datediv') !== null) {
            return;
        }
        cssClass.allcalculator.label['margin-left'] = '0px';
        datediv = createElement('div', container, {
            'id': 'datediv'
        }, null, cssClass.allcalculator.container);
        form_filed = createElement('fieldset', datediv, null, null, {
                'width': '300px',
                'height': '140px'
            }),
            caption = createElement('legend', form_filed, null, null, null).appendChild(document.createTextNode("Date")),
            table = createElement('table', form_filed, {
                'id': 'date-table'
            }, null, null);
        table.cellSpacing = 5;
        for (i = 0; i < 3; i++) {
            if (i != 2) {
                tr = table.insertRow(i);
                input = createElement('input', tr.insertCell(0), {
                    'type': 'text',
                    'id': dc.id[i],
                    'placeholder': 'mm/dd/yyyy'
                }, {
                    blur: function() {
                        checkdate(this.id);
                    }
                }, cssClass.allcalculator.input);
                span = createElement('span', tr.insertCell(0), null, null, cssClass.allcalculator.label);
                span.appendChild(document.createTextNode(dc.label[i]));
            } else {
                tr = table.insertRow(i);
                cssClass.allcalculator.input['width'] = '180px';
                input = createElement('input', tr.insertCell(0), {
                    'type': 'text',
                    'id': dc.id[i]
                }, null, cssClass.allcalculator.input);
                cssClass.allcalculator.button['margin-left'] = '5px';
                input = createElement('input', tr.insertCell(0), {
                    'type': 'button',
                    'id': 'dtbtn',
                    'value': 'calculate'
                }, {
                    click: function() {
                        showdate();
                    }
                }, cssClass.allcalculator.button);
            }
        }
        form_filed = createElement('fieldset', datediv, null, null, {
            'width': '380px',
            'height': '180px'
        });
        caption = createElement('legend', form_filed, null, null, {}).appendChild(document.createTextNode("Find Out Date"));
        table = createElement('table', form_filed, {
            'id': 'date-table'
        }, null, null);
        table.cellSpacing = "20";
        placeholder = 'mm/dd/yyyy hh:mm:ss';
        for (var j = 0; j < 3; j++, i++) {
        
            if (i != 5) {
                tr = table.insertRow(j);
                if (i == 4)
                    placeholder = 'Hours';
                input = createElement('input', tr.insertCell(0), {
                    'type': 'text',
                    'id': dc.id[i],
                    'placeholder': placeholder
                }, {
                    blur: function() {
                        if (this.id != 'timeinterval')
                            checkdatetime(this.id);
                        else
                            checkhour(this.id);
                    }
                }, cssClass.allcalculator.input);
                span = createElement('span', tr.insertCell(0), null, null, cssClass.allcalculator.label);
                span.appendChild(document.createTextNode(dc.label[i]));
            } else {
                tr = table.insertRow(j);
                cssClass.allcalculator.input['width'] = '180px';
                input = createElement('input', tr.insertCell(0), {
                    'type': 'text',
                    'id': dc.id[i]
                }, null, cssClass.allcalculator.input);
                cssClass.allcalculator.button['margin-left'] = '5px';
                input = createElement('input', tr.insertCell(0), {
                    'type': 'button',
                    'id': 'dtbtn',
                    'value': 'calculate'
                }, {
                    click: function() {
                        showcurrdate();
                    }
                }, cssClass.allcalculator.button);
            }
        }
    }

    function mccal() { /*Mortgage Calculator layout*/
        var table, td, tr, span, btn, input, c = 1,
            i;
        if (document.getElementById('mcdiv') !== null) {
            return;
        }
        if (document.getElementById('datediv') !== null) {
            document.getElementById('datediv').remove();
        }
        if (document.getElementById('bcdiv') !== null) {
            document.getElementById('bcdiv').remove();
        }
        var mcdiv = createElement('div', container, {
            id: 'mcdiv'
        }, null, cssClass.allcalculator.container);
        table = createElement('table', mcdiv, {
            'id': 'mc-table'
        }, null, null);
        table.cellSpacing = 10;
        for (i = 0; i < 5; i++) {
            if (i != 4) {
                tr = table.insertRow(i);
                input = createElement('input', tr.insertCell(0), {
                    'type': 'text',
                    'id': mc.id[i]
                }, null, cssClass.allcalculator.input);
                span = createElement('span', tr.insertCell(0), null, null, cssClass.allcalculator.label);
                span.appendChild(document.createTextNode(mc.label[i]));
            } else {
                span = createElement('span', mcdiv, null, null, null);
                input = createElement('input', span, {
                    'type': 'button',
                    'id': 'mcbtn',
                    'value': 'calculate'
                }, mc.function, cssClass.allcalculator.button);
            }
        }
    };

    function result() { //mortgage calculator calculation
        var p, r, n, e, x;
        p = Number(document.getElementById(mc.id[0]).value);
        r = Number(document.getElementById(mc.id[1]).value);
        n = Number(document.getElementById(mc.id[2]).value);
        e = Number(document.getElementById(mc.id[3]).value);
        r /= 1200;
        x = Math.pow((1 + r), n);
        if (p === 0) {
            p = Math.round(((e * (x - 1)) / (r * x)));
            document.getElementById(mc.id[0]).value = p;
        } else if (n === 0) {
            n = (Math.log(e / ((e - (p * r))))) / (Math.log(1 + r));
            document.getElementById(mc.id[2]).value = Math.round(Math.abs(n));
        } else if (e === 0) {
            e = (p * r * x) / (x - 1);
            document.getElementById(mc.id[3]).value = Math.round(e);
        }
    };

    function DateDiff(d1, d2) { //date difference function

        this.inDays = function() {

            return Math.abs(parseInt((d1.getTime() - d2.getTime()) / (24 * 3600 * 1000)));
        };
        this.inMonths = function() {

            var d1Y = d1.getFullYear();
            var d2Y = d2.getFullYear();
            var d1M = d1.getMonth();
            var d2M = d2.getMonth();

            return Math.abs((d2M + 12 * d2Y) - (d1M + 12 * d1Y));
        };

        this.inYears = function() {
            return Math.abs(d2.getFullYear() - d1.getFullYear());
        };
    }

    function showdate() { /*date diifference*/
        if (Number(document.getElementById(dc.id[0]).value) === 0 ||
            Number(document.getElementById(dc.id[1]).value) === 0)
            return;
        var dString = document.getElementById(dc.id[0]).value;

        var d2String = document.getElementById(dc.id[1]).value;
       
        var d1 = new Date(dString);
        var d2 = new Date(d2String);
        var D = new DateDiff(d1, d2);
        document.getElementById(dc.id[2]).value = D.inDays() + " " + "Days, " + D.inMonths() + " " + "Months, " + D.inYears() + " Years.";
    }

    function checkdate(id) { /*check date format */

        if (Number(document.getElementById(id).value) === 0) {
            document.getElementById(id).style.backgroundColor = 'red';
        } else if (document.getElementById(id).value.split('/')[0] > 12 || document.getElementById(id).value.split('/')[1] > 31 || document.getElementById(id).value.split('/')[2] < 1600) {
            document.getElementById(id).style.backgroundColor = 'red';
        } else {
            document.getElementById(id).style.backgroundColor = 'white';
        }
    }

    function showcurrdate() { /*time interval*/
        debugger;
        if (Number(document.getElementById(dc.id[3]).value) === 0 ||
            Number(document.getElementById("timeinterval").value) === 0)
            return;
        var ptime = document.getElementById(dc.id[3]).value;

        var d = new Date(ptime);
        var itime = d.getTime() + document.getElementById("timeinterval").value * 3600000;
        var d1 = new Date(parseInt(itime));

        document.getElementById('dateis').value = d1.toLocaleString();
    };

    function checkdatetime(id) { /*check date time format*/
        debugger;
        if (Number(document.getElementById(id).value) === 0) {
            document.getElementById(id).style.backgroundColor = 'red';
        } else if (document.getElementById(id).value.split('/')[0] > 12 || document.getElementById(id).value.split('/')[1] > 31 || document.getElementById(id).value.split('/')[2] < 1600 || document.getElementById(id).value.split('/')[2].indexOf(' ') < 0) {
            alert('Pleace Give The Right Form Including Space ')
            document.getElementById(id).style.backgroundColor = 'red';
        } else {
            document.getElementById(id).style.backgroundColor = 'white';
        }
    }

    function checkhour(id) { /*check interval time in hour*/
        if (Number(document.getElementById(id).value) === 0) {
            document.getElementById(id).style.backgroundColor = 'red';
        } else {
            document.getElementById(id).style.backgroundColor = 'white';
        }
    }

    function bcProcess() { /*basic calculator process*/
        var keys = document.querySelectorAll('#calculator span'),
            operators = ['+', '-', '*', '/', '%'],
            decimalPonitAdd = false,
            memory = 0,
            i, input, inputVal, btnVal, equation,
            lastChar;

        // Add onclick event to all the keys and perform operations
        for (i = 0; i < keys.length; i++) {
            keys[i].onclick = function(e) {
                // Get the input and button values
                input = document.getElementById('screen');
                inputVal = input.innerHTML;
                btnVal = this.innerHTML;
                switch (btnVal) {
                    case 'bk':
                        inputVal = inputVal.substring(0, inputVal.length - 1);
                        input.innerHTML = inputVal;
                        break;
                    case 'M+':
                        inputVal = inputVal.replace(/\b0+/g, '');
                        memory = eval(inputVal);
                        break;
                    case 'Mc':
                        input.innerHTML = 0;
                        memory = 0;
                        break;
                    case 'Mr':
                        input.innerHTML = memory;
                        break;
                    case 'C':
                        input.innerHTML = '';
                        decimalPonitAdd = false;
                        break;
                        // If = key is pressed, calculate and display the result
                    case '=':
                        equation = inputVal;
                        lastChar = equation[equation.length - 1];
                        //  last character of the equation. If it's an operator or a decimal, remove it
                        if (operators.indexOf(lastChar) > -1 || lastChar == '.')
                            equation = equation.replace(/.$/, '');
                        if (equation)
                            input.innerHTML = eval(equation);
                        decimalPonitAdd = false;
                        break;
                    case '.':
                        if (!decimalPonitAdd) {
                            input.innerHTML += btnVal;
                            decimalPonitAdd = true;
                        }

                        break;

                    default:
                        if (operators.indexOf(btnVal) > -1) {
                            // Operator is clicked
                            // Get the last character from the equation
                            lastChar = inputVal[inputVal.length - 1];
                            // Only add operator if input is not empty and there is no operator at the last
                            if (inputVal !== '' && operators.indexOf(lastChar) == -1)
                                input.innerHTML += btnVal;
                            // Allow minus if the string is empty
                            else if (inputVal === '' && btnVal == '-')
                                input.innerHTML += btnVal;
                            // Replace the last operator (if exists) with the newly pressed operator
                            if (operators.indexOf(lastChar) > -1 && inputVal.length > 1) {
                                input.innerHTML = inputVal.replace(/.$/, btnVal);
                            }

                            decimalPonitAdd = false;
                        } else {
                            input.innerHTML += btnVal;
                        }
                }

            };
        }
    }

    function createElement(tagName, parentElmentName, attribute, event, styleSheet) {
        var element, attr, style, ev;
        element = document.createElement(tagName);
        console.log(event);
        for (attr in attribute) {
            element[attr] = attribute[attr];

        }
        for (style in styleSheet) {
            element.style[style] = styleSheet[style];
        }
        parentElmentName.appendChild(element);
        for (ev in event) {
            element.addEventListener(ev, event[ev]);
        }
        return element;
    }
}());