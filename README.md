# test work
---Формула для расчета ширины ---
@media screen and (min-width: 760px) {
    width: calc (
        (100% - кол-во маржинов в строке * значение марджина)/ 
        кол-во элементов в строке
    );
    calc:((100% - 2 * 10px)/2);
    margin: 5px;
}
https://viacheslavsosnovskiy.github.io/goit-markup-hw-08/test.html

у нас адаптивный контейнер и мы будем делать так:
        <div class="thumb">
            <img 
                srcset="
                    img/img-2@1x.jpg 1x,
                    img/img-2@2x.jpg 2x
                " 
                src="img/img-2@1x.jpg" 
                alt="зайка"
                width="320"/>
        </div>
