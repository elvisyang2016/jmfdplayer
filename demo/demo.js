// stats.js: JavaScript Performance Monitor
const stats = new Stats();

stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
document.body.appendChild(stats.dom);
function animate () {
    stats.begin();
    // monitored code goes here
    stats.end();

    requestAnimationFrame(animate);
}
requestAnimationFrame(animate);

initPlayers();
// handleEvent();
function reload () {
    window.dp1.reload();
}
function empty () {
    window.dp1.empty();
}
function speed (number) {
    window.dp1.danmaku.speed(number);
}
// function handleEvent () {
//     document.getElementById('dplayer-dialog').addEventListener('click', (e) => {
//         const $clickDom = e.currentTarget;
//         const isShowStatus = $clickDom.getAttribute('data-show');

//         if (isShowStatus) {
//             document.getElementById('float-dplayer').style.display = 'none';
//         } else {
//             $clickDom.setAttribute('data-show', 1);
//             document.getElementById('float-dplayer').style.display = 'block';
//         }
//     });

//     document.getElementById('close-dialog').addEventListener('click', () => {
//         const $openDialogBtnDom = document.getElementById('dplayer-dialog');
//         $openDialogBtnDom.setAttribute('data-show', '');
//         document.getElementById('float-dplayer').style.display = 'none';
//     });
// }

function initPlayers () {
    // dplayer-float
    const options = {
        container: document.getElementById('dplayer1'),
        autoplay: true,
        screenshot: true,
        live: false,

        buttons:{
            playButton:{

            },
            volumeButton:{

            },
            setting:{

            },
            screenshot:{

            },
            fullScreen:{

            },
            timePanel:{

            },
            webFullScreen:{}
        },
        video: {
            // url:'https://tcplay.qiuhui.com/live/57755_0a61ce8d9d0d1ba93e5fe78225ccb08a_hd.flv',
            // url:'https://ks.play.sit.qiuhui.com/live/55963_21a1330cf3d58be4bba63f09a13c4217_hd.flv',
            // url:'http://ivi.bupt.edu.cn/hls/cctv1hd.m3u8',
            url:'https://video.qiuhui.com/assets/20191111/video/51f0e2a8-a70b-412f-98b3-7e57f7dc6056.mp4',
            // thumbnails:'https://static.qiuhui.com/avatar/0513036d-7b3b-40c4-9db7-0933d5175a5f.png'
            // type:'hls'
        }
    };
    const options1 = {
        container: document.getElementById('dplayer1'),
        screenshot: true,
        live: true,
        theme: '#FADFA3',
        loop: false,
        lang: 'zh-cn',
        screenshot: true,
        hotkey: true,
        preload: 'auto',
        volume: 0.7,
        mutex: true,
        unlimited:true,
        dblclick:true,
        contextmenu:[
            {
                text:'haha',
                click:function () {alert(1);}
            }, {
                text:'www.baidu.com',
                link:'http://www.baidu.com'
            }
        ],
        buttons:{
            playButton:{// 播放 暂停
                icon_pause:'',  // 暂停图标
                icon_play:'',   // 播放图标
                // callback: (obj) => {  // 点击回调函数 obj为Dplayer对象
                //     console.log('========play=========');
                //     console.log(obj);
                // }
            },
            volumeButton:{  // 声音
                volumeUp:'',
                volumeDown:'',
                volumeOff:''
            },
            fullScreen:{  // 全屏
                icon:'',
                // callback: (obj) => {
                //     console.log('========fullScreen=============');
                //     console.log(obj);
                // }
            },
            settingCustomer:{  // 自定义设置
                icon:''
            },
            setting:{

            },
            comment:{  // 评论
                icon:'',
                icon_pallette:'',
                icon_send:''
            },
            screenshot:{  // 截图
                icon:'',
                callback: (obj) => {
                    console.log('========screenshot=============');
                    console.log(obj);
                }
            },
            subtitle:{  // 字幕
                icon:'',
                // callback: (obj) => {
                //     console.log('========subtitle=============');
                //     console.log(obj);
                // }
            },
            webFullScreen:{  // 网页全屏
                icon:'',
                callback:(obj) => {
                    console.log('========webFullScreen=============');
                    console.log(obj);
                }
            },
            timePanel:{

            }
        },
        video:{
            quality:[
                // {
                //     name: '标清',
                //     type: 'flv',
                //     url: 'https://gw.sit.qiuhui.com/jmfen-live/v2.3/room/stream/distribute?format=3&agreement=3&transcod=1&room_id=100109'
                // },
                // {
                //     name: '高清',
                //     type: 'flv',
                //     url: 'https://gw.sit.qiuhui.com/jmfen-live/v2.3/room/stream/distribute?format=3&agreement=3&transcod=2&room_id=100109'
                // },
                // {
                //     name: '超清',
                //     type: 'flv',
                //     url: 'https://gw.sit.qiuhui.com/jmfen-live/v2.3/room/stream/distribute?format=3&agreement=3&transcod=3&room_id=100109'
                // }


                // {
                //     name: '标清',
                //     type: 'hls',
                //     url: 'https://gw.sit.qiuhui.com/jmfen-live/v2.3/room/stream/distribute?format=2&agreement=3&transcod=1&room_id=100109'
                // },
                // {
                //     name: '高清',
                //     type: 'hls',
                //     url: 'https://gw.sit.qiuhui.com/jmfen-live/v2.3/room/stream/distribute?format=2&agreement=3&transcod=2&room_id=100109'
                // },
                // {
                //     name: '超清',
                //     type: 'hls',
                //     url: 'https://gw.sit.qiuhui.com/jmfen-live/v2.3/room/stream/distribute?format=2&agreement=3&transcod=3&room_id=100109'
                // }


                {
                    name: '标清',
                    type: 'flv',
                    url: 'https://gw.qiuhui.com/jmfen-live/v2.3/room/stream/distribute?format=3&agreement=3&transcod=1&room_id=100012'
                },
                {
                    name: '高清',
                    type: 'flv',
                    url: 'https://gw.qiuhui.com/jmfen-live/v2.3/room/stream/distribute?format=3&agreement=3&transcod=2&room_id=100012'
                },
                {
                    name: '超清',
                    type: 'flv',
                    url: 'https://gw.qiuhui.com/jmfen-live/v2.3/room/stream/distribute?format=3&agreement=3&transcod=3&room_id=100012'
                }

                // {
                //     name: '高清',
                //     type: 'hls',
                //     url: 'https://tcplay.qiuhui.com/live/100012_ld.m3u8'
                // },
                // {
                //     name: '高清',
                //     type: 'hls',
                //     url: 'https://tcplay.qiuhui.com/live/100012_hd.m3u8'
                // },
                // {
                //     name: '超清',
                //     type: 'hls',
                //     url: 'https://tcplay.qiuhui.com/live/100012_ld.m3u8'
                // }


                // {
                //     name:'标清',
                //     type:'hls',
                //     url:'http://txplay.qiuhui.com/live/100144_hd.m3u8'
                // }
            ],
            defaultQuality:0,
            defaultLine:0,
            line:[
                {
                    line_name:'主线路',
                    line_id:0
                }, {
                    line_name:'备用线路2',
                    line_id:2
                }, {
                    line_name:'备用线路1',
                    line_id:1
                }
            ]
        },
        danmaku: {
            bottom:'20px',
            top:'20px'

        },
        contextmenu:[
            {
                text:'haha',
                link:'http://www.baidu.com'
            },
            {
                text:'haha',
                link:'http://www.baidu.com'
            },
            {
                text:'haha',
                link:'http://www.baidu.com'
            },
            {
                text:'haha',
                link:'http://www.baidu.com'
            }, {
                text:'haha',
                link:'http://www.baidu.com'
            }
        ]

    };
    // dp1
    window.dp1 = new DPlayer(options1);
}
// window.dp1.on('sendComment', (message) => { // message 为弹幕信息(颜色，文字，内容)
//     console.log('============sendComment=============');
//     console.log(message);
// });

window.dp1.on('error', (error) => {
    console.log('=========error===========');
    console.log(error);
    window.dp1.reload();
});
window.dp1.on('canplay', () => {
    console.log('==========canplay==============');
});
window.dp1.on('loadedmetadata', function () {
    // const height = window.dp1.video.videoHeight;
    // const width = window.dp1.video.videoWidth;
    // window.dp1.video.style.width = width + 'px';
    // window.dp1.video.style.height = height + 'px';
    // window.dp1.video.style.margin = '0 auto';
    // console.log('==================');
    // console.log(height, width);
});
// window.dp1.on('sourthError', (error) => {
//     console.log('=======sourthError=======');
//     console.log(error);
// });
// window.dp1.on('reload', (quality) => {
//     console.log('===========reload=================');
//     console.log(quality);
// });
// window.dp1.on('sendComment', (quality) => {
//     console.log('===========sendComment============');
//     console.log(quality);
// });
// window.dp1.on('ended', () => {
//     console.log('===========ending============');
// });
// window.dp1.on('suspend', () => {
//     console.log('========suspend=========');
// });
// window.dp1.on('loadedmetadata', () => {
//     console.log('=====loadedmetadata============');
// });
// window.dp1.on('suspend', () => {
//     console.log('============suspend============');
// });

function closeVideo () {
    window.dp1.destroy();
}