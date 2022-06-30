const music=new Audio('audio/1.mp3')


const songs=[
    {
        id:'1',
        songName :`Faded
        <div class="subtitle">Alan Walker</div>`,
        poster:"images/1.jpg"
    },
    {
        id:'2',
        songName :`Dj Waley Babu <br>
        <div class="subtitle">Badshah</div>`,
        poster:"images/2.jpg"
    },
    {
        id:'3',
        songName :`Tum Hi ho <br>
        <div class="subtitle">Arijit Singh</div>`,
        poster:"images/3.jpg"
    },
    {
        id:'4',
        songName :`Khabbi Seat <br>
        <div class="subtitle">Ammy Virk</div>`,
        poster:"images/4.jpg"
    },{
        id:'5',
        songName :`Chiita Kurta <br>
        <div class="subtitle">Karan Aujla</div>`,
        poster:"images/5.jpg"
    },
    {
        id:'6',
        songName :`Bottle <br>
        <div class="subtitle">Deep Money</div>`,
        poster:"images/6.jpg"
    },
    {
        id:'7',
        songName :`G.O.A.T <br>
        <div class="subtitle">Diljit</div>`,
        poster:"images/7.jpg"
    },
    {
        id:'8',
        songName :`LAHORE <br>
        <div class="subtitle">Guru Randhawa</div>`,
        poster:"images/8.jpg"
    },
    {
        id:'9',
        songName :`Makhna<br>
        <div class="subtitle">Honey Singh</div>`,
        poster:"images/9.jpg"
    },
    {
        id:'10',
        songName :`Tum hi ana<br>
        <div class="subtitle">Jubin nautyal</div>`,
        poster:"images/10.jpg"
    },
    {
        id:'11',
        songName :`295 <br>
        <div class="subtitle">Sidhu Moosewala</div>`,
        poster:"images/11.jpg"
    },
    {
        id:'12',
        songName :`Dollar <br>
        <div class="subtitle">Sidhu Moosewala</div>`,
        poster:"images/12.jpg"
    },
    {
        id:'13',
        songName :`Alone <br>
        <div class="subtitle">Alan Walker</div>`,
        poster:"images/13.jpg"
    },
    {
        id:'14',
        songName :`Brownies and sugar <br>
        <div class="subtitle">Dharia</div>`,
        poster:"images/14.jpg"
    },
    {
        id:'15',
        songName :`My Baby Love <br>
        <div class="subtitle">Jony</div>`,
        poster:"images/15.jpg"
    }
]

Array.from(document.getElementsByClassName('songItem')).forEach((element,i)=>{
    element.getElementsByTagName('img')[0].src=songs[i].poster;
    element.getElementsByTagName('h5')[0].innerHTML=songs[i].songName;

})

let play_btn=document.getElementById('play');
play_btn.addEventListener('click',()=>{
    music.src=`audio/11.mp3`;
    

    poster_master_play.src=`images/11.jpg`;  // picture is changed when choose music in masterplay
    if (music.paused || music.currentTime<=0) {
        music.play();
        master_play.classList.remove('fa-play');
        master_play.classList.add('fa-pause');
        wave.classList.add('active2');
    } else {
        music.pause();
        master_play.classList.add('fa-play');
        master_play.classList.remove('fa-pause');
        wave.classList.remove('active2');
    }

        title.innerHTML=`295 <br>
        <div class="subtitle">Sidhu Moosewala</div>`;  
        
})

function btnClicked(){
    document.location.href="https://www.youtube.com/c/SidhuMooseWalaOfficial"
}

let master_play= document.getElementById('masterPlay');
let wave=document.getElementsByClassName('wave')[0];
master_play.addEventListener('click',()=>{
    if (music.paused || music.currentTime<=0) {
        music.play();
        master_play.classList.remove('fa-play');
        master_play.classList.add('fa-pause');
        wave.classList.add('active2');
    } else {
        music.pause();
        master_play.classList.add('fa-play');
        master_play.classList.remove('fa-pause');
        wave.classList.remove('active2');
    }
})

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
        
            
            element.classList.add("fa-play-circle");
            element.classList.remove("fa-pause-circle");
        })
    
}

const makeAllBackgrounds=()=>{
    Array.from(document.getElementsByClassName('SongItem')).forEach((element)=>{
        
            
            element.style.background="rgb(105,105,170,0)";
        })
    
}

let index=0;
let poster_master_play=document.getElementById('poster_master_play');
let title=document.getElementById('title');
Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        index= e.target.id;
        makeAllPlays();
        e.target.classList.remove("fa-play-circle");
        e.target.classList.add("fa-pause-circle");

        music.src=`audio/${index}.mp3`; // on based of id music is changed when choose music in masterplay
        poster_master_play.src=`images/${index}.jpg`;  // picture is changed when choose music in masterplay
        music.play();

        let song_title=songs.filter((ele)=>{
            return ele.id==index;
        })

        song_title.forEach(ele=>{
            let {songName}=ele;
            title.innerHTML=songName;
        })
        master_play.classList.remove('fa-play');
        master_play.classList.add('fa-pause');
        wave.classList.add('active2');
        music.addEventListener('ended',()=>{
            master_play.classList.add('fa-play');
            master_play.classList.remove('fa-pause');
            wave.classList.add('active2');
        })
        makeAllBackgrounds();
        Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background="rgb(105,105,170,.1)";
    })
})

let currentStart=document.getElementById('currentStart');
let currentEnd=document.getElementById('currentEnd');
let seek=document.getElementById('seek');
let bar2=document.getElementById('bar2');
let dot=document.getElementsByClassName('dot')[0];


music.addEventListener('timeupdate',()=>{
    let music_curr=music.currentTime;
    let music_dur=music.duration;

    let min=Math.floor(music_dur/60);
    let sec=Math.floor(music_dur%60);

    if(sec<10){
        sec=`0${sec}`;
    }
    currentEnd.innerText=`${min}:${sec}`;

    let min1=Math.floor(music_curr/60);
    let sec1=Math.floor(music_curr%60);

    if(sec1<10){
        sec1=`0${sec1}`;
    }
    currentStart.innerText=`${min1}:${sec1}`;

    let progressbar=parseInt((music.currentTime/music.duration)*100);
    seek.value=progressbar;
    let seekbar=seek.value;
    bar2.style.width=`${seekbar}%`;
    dot.style.left=`${seekbar}%`;
})
seek.addEventListener('change',()=>{
    music.currentTime=seek.value * music.duration/100;
})

music.addEventListener('ended',()=>{
    master_play.classList.add('fa-play');
    master_play.classList.remove('fa-pause');
    wave.classList.remove('active2');
})

let vol_icon=document.getElementById('vol_icon');
let vol=document.getElementById('vol');
let vol_dot=document.getElementById('vol_dot');
let vol_bar=document.getElementsByClassName('vol_bar')[0];

vol.addEventListener('change',()=>{
    if(vol.value == 0){
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
    }
    if(vol.value>0){
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
    }
    if(vol.value>50){
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.add('bi-volume-up-fill');
    }

    let vol_a=vol.value;
    vol_bar.style.width=`${vol_a}%`;
    vol_dot.style.left=`${vol_a}%`;
    music.volume=vol_a/100;      /// music volume is changing here
})

let back=document.getElementById('back');
let next=document.getElementById('next');

back.addEventListener('click',()=>{
    index-=1;
    if(index<1){
        index=Array.from(document.getElementsByClassName('songItem')).length;
    }
    music.src=`audio/${index}.mp3`;
    poster_master_play.src=`images/${index}.jpg`;  // picture is changed when choose music in masterplay
        music.play();

        let song_title=songs.filter((ele)=>{
            return ele.id==index;
        })

        song_title.forEach(ele=>{
            let {songName}=ele;
            title.innerHTML=songName;
        })
        makeAllPlays();
        document.getElementById(`${index}`).classList.remove('fa-play');
        document.getElementById(`${index}`).classList.add('fa-pause');
        makeAllBackgrounds();
        Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background="rgb(105,105,170,.1)";
})

next.addEventListener('click',()=>{
    index-=0;
    index+=1;
    if(index>Array.from(document.getElementsByClassName('songItem')).length){
        index=1;
    }
    music.src=`audio/${index}.mp3`;
    poster_master_play.src=`images/${index}.jpg`;  // picture is changed when choose music in masterplay
        music.play();

        let song_title=songs.filter((ele)=>{
            return ele.id==index;
        })

        song_title.forEach(ele=>{
            let {songName}=ele;
            title.innerHTML=songName;
        })
        makeAllPlays();
        document.getElementById(`${index}`).classList.remove('fa-play');
        document.getElementById(`${index}`).classList.add('fa-pause');
        makeAllBackgrounds();
        Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background="rgb(105,105,170,.1)";
})

let left_scroll=document.getElementById('left_scroll');
let right_scroll=document.getElementById('right_scroll');
let pop_song=document.getElementsByClassName('pop_song')[0];

left_scroll.addEventListener('click',()=>{
    pop_song.scrollLeft -=330;
})
right_scroll.addEventListener('click',()=>{
    pop_song.scrollLeft +=330;
})

let left_scrolls=document.getElementById('left_scrolls');
let right_scrolls=document.getElementById('right_scrolls');
let item=document.getElementsByClassName('item')[0];

left_scrolls.addEventListener('click',()=>{
    item.scrollLeft -=330;
})
right_scrolls.addEventListener('click',()=>{
    item.scrollLeft +=330;
})