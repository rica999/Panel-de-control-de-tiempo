document.querySelector('#daily').addEventListener('click',function(){
    getData("daily");
});
document.querySelector('#weekly').addEventListener('click',function(){
    getData("weekly");
});
document.querySelector('#monthly').addEventListener('click',function(){
    getData("monthly");
});

function getData(time){
    const xtttp = new XMLHttpRequest();
    xtttp.open('GET','data.json',true);
    xtttp.send();

    xtttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            let datos = JSON.parse(this.responseText);

            let work_hrs = document.querySelector('#num_horas1');
            let work_prehrs = document.querySelector('#prenum_horas1');
            let play_hrs = document.querySelector('#num_horas2');
            let play_prehrs = document.querySelector('#prenum_horas2');
            let study_hrs = document.querySelector('#num_horas3');
            let study_prehrs = document.querySelector('#prenum_horas3');
            let exercise_hrs = document.querySelector('#num_horas4');
            let exercise_prehrs = document.querySelector('#prenum_horas4');
            let social_hrs = document.querySelector('#num_horas5');
            let social_prehrs = document.querySelector('#prenum_horas5');
            let self_hrs = document.querySelector('#num_horas6');
            let self_prehrs = document.querySelector('#prenum_horas6');

            work_hrs.innerHTML = '';
            work_prehrs.innerHTML = '';
            play_hrs.innerHTML = '';
            play_prehrs.innerHTML = '';
            study_hrs.innerHTML = '';
            study_prehrs.innerHTML = '';
            exercise_hrs.innerHTML = '';
            exercise_prehrs.innerHTML = '';
            social_hrs.innerHTML = '';
            social_prehrs.innerHTML = '';
            self_hrs.innerHTML = '';
            self_prehrs.innerHTML = '';

            work_hrs.innerHTML += `${datos[0].timeframes[time].current}`+'hrs';
            play_hrs.innerHTML += `${datos[1].timeframes[time].current}`+'hrs';
            study_hrs.innerHTML += `${datos[2].timeframes[time].current}`+'hrs';
            exercise_hrs.innerHTML += `${datos[3].timeframes[time].current}`+'hrs';
            social_hrs.innerHTML += `${datos[4].timeframes[time].current}`+'hrs';
            self_hrs.innerHTML += `${datos[5].timeframes[time].current}`+'hrs';

            work_prehrs.innerHTML += 'Last Week -' + `${datos[0].timeframes[time].previous}`+'hrs';
            play_prehrs.innerHTML += 'Last Week -' + `${datos[1].timeframes[time].previous}`+'hrs';
            study_prehrs.innerHTML += 'Last Week -' + `${datos[2].timeframes[time].previous}`+'hrs';
            exercise_prehrs.innerHTML += 'Last Week -' + `${datos[3].timeframes[time].previous}`+'hrs';
            social_prehrs.innerHTML += 'Last Week -' + `${datos[4].timeframes[time].previous}`+'hrs';
            self_prehrs.innerHTML += 'Last Week -' + `${datos[5].timeframes[time].previous}`+'hrs';
        }
    }
}
