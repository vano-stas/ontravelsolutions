let form = document.getElementById('form'),
    url = document.getElementById('url'),
    urlBase = 'http://любой_домен/filter?',
    sizePart = "",
    colorPart = "",
    manufacturerPart = "",
    btnUrl = document.getElementById('btn-url');


btnUrl.addEventListener('click', (e) => {
    scanSize();
    scanColor();
    scanManufacturer();
});

const scanSize = () => {
    let size = new RegExp('(?:size=)([a-zA-z])');
    let scan = url.value.match(size);
    let allSize = Array.from(document.getElementsByName('size'));
    let currentOption = allSize.filter((item) => {
            return item.value == scan[1];
        });
    sizePart = `size=${scan[1]}`;
    currentOption.forEach((item)=> item.checked = true);
};

const scanColor = () => {
    let color = new RegExp('(?:color=)(([0-9].*)&)');
    let scan = url.value.match(color);
    let allColor = Array.from(document.getElementsByName('color'));
    let allValue = scan[2].split(',');
    let currentOption = allColor.filter(item => {
            return (allValue.find((elem)=>{
                if (elem == item.value) return elem;
            }))
        });
    colorPart = `color=${scan[2]}`;
    allColor.forEach((item)=> item.checked = false);
    currentOption.forEach((item)=> item.checked = true);
};

const scanManufacturer = () => {
    let manufacturer = new RegExp('(?:manufacturer=)([a-z].*)');
    let scan = url.value.match(manufacturer);
    let allManufacturer = Array.from(document.getElementsByName('manufacturer'));
    let allValue = scan[1].split(',');
    let currentOption = allManufacturer.filter(item => {
            return (allValue.find((elem)=>{
                if (elem == item.value) return elem;
            }))
        });
    manufacturerPart = `manufacturer=${scan[1]}`;
    allManufacturer.forEach((item)=> item.selected = false);
    currentOption.forEach((item)=> item.selected = true);
}


form.addEventListener('change', (e) => {

    switch (e.target.name) {
        case 'size':
            changeSize(e.target);
            break;

        case'color':
            changeColor(e.target);
            break;

        case 'manufacturer':
            changeManufacturer(e.target);
            break;
    }
});

const changeSize = (item) => {
    let allSize = Array.from(document.getElementsByName('size'));
    let newArr = allSize.filter((elem) => {
            return elem.checked === true;
        });
    let str = [];
    newArr.forEach((elem, i)=> {
        str[i] = elem.value;
    });

    sizePart = `${item.name}=${str.join(',')}`;

    createUrl();
};

const changeColor = (item) => {
   
    let allColor = Array.from(document.getElementsByName('color'));
    let newArr = allColor.filter((elem) => {
            return elem.checked === true;
        });
    let str = [];

    newArr.forEach((elem, i)=> {
        str[i] = elem.value;
    });

    str.length
        ? colorPart = `${item.name}=${str.join(',')}`
        : colorPart = '';

    createUrl();
};

const changeManufacturer = (item) => {

    let allManufacturer = Array.from(document.getElementsByName('manufacturer'));
    let newArr = allManufacturer.filter((elem) => {
            return elem.selected == true;
        });
    let str = [];

    newArr.forEach((elem, i)=> {
        str[i] = elem.value;
    });

    str.length
        ? manufacturerPart = `${item.name}=${str.join(',')}`
        : manufacturerPart = '';
        
    createUrl();
};

function createUrl () {

    let newUrl = "";

    (sizePart && (colorPart || manufacturerPart))
        ? newUrl = `${urlBase}${sizePart}&${colorPart}${manufacturerPart}`
        : newUrl = `${urlBase}${sizePart}${colorPart}${manufacturerPart}`;
        
    (!sizePart && (manufacturerPart && colorPart))
        ? newUrl = `${urlBase}${sizePart}${colorPart}&${manufacturerPart}`
        :null;

    (sizePart && manufacturerPart)
        ? newUrl = `${urlBase}${sizePart}${colorPart}&${manufacturerPart}`
        :null;

    (sizePart && colorPart && manufacturerPart) 
        ? newUrl = `${urlBase}${sizePart}&${colorPart}&${manufacturerPart}`
        : null;

    console.log(newUrl);
}