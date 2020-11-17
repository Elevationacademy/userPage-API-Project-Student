let data;
const btnLoadDataClick = function()
{
    data = new APIManager().loadData();
};

const btnDisplayDataClick = function()
{
    const render = new Renderer();
    render.renderData(data);
};

const btnSaveStorageClick = function()
{
    localStorage.user = JSON.stringify(data);
};

const btnLoadStorageClick = function()
{
    data = JSON.parse(localStorage.getItem('user'));
    btnDisplayDataClick();
};

$(function()
{
    $("#loadData").click(btnLoadDataClick);
    $("#displayData").click(btnDisplayDataClick);
    $("#loadStorage").click(btnLoadStorageClick);
    $("#saveStorage").click(btnSaveStorageClick);
   
});