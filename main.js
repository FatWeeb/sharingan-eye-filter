leftEyeX = 0;
leftEyeY = 0;

function preload()
{
    sharingan_eye = loadImage('https://i.postimg.cc/xjsR7kNx/Sharingan-Triple.png');
}

function setup()
{
    canvas = createCanvas(450,333);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(450,333);

    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',  gotPoses);
}




function modelLoaded()
{
    console.log('PoseNet Is Initialize')
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        leftEyeX = results[0].pose.leftEye.x;
        leftEyeY = results[0].pose.leftEye.y;
        console.log("leftEye x =" + leftEyeX);
        console.log("leftEye y =" + leftEyeY);
    }
}




function draw()
{
    image(video,0,0,450,333);
    image(sharingan_eye, leftEyeX-5, leftEyeY-8, 20, 20);
}

function take_snapshot()
{
    save('myFilterImage.png');
}