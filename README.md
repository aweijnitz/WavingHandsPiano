# Waving Hands Piano

A small experiment in gesture recognition, based on [Tensorflow.js](https://www.tensorflow.org/js).
Gesture classification net created using [Teachable Machine](https://teachablemachine.withgoogle.com/).

## What is this?

This is s webpage which plays piano notes based on hand gestures by the user.
It works like this:

1. Capture a frame from the web camera.
2. Estimate the position of the user (hands, head, arms...) using the [PoseNet model](https://www.tensorflow.org/lite/models/pose_estimation/overview).
3. Classify the pose as a note, by feeding the pose points from step 2 into a model trained to map gestures to musical notes in the C major scale (1 of 8 possibilities).
4. Unless a note is already playing, play the note with the highest classified probability (that is also over 80% in likelihood)
5. GOTO 1.

## What it is not

This code is not intended for any production use.
It for my own exploration of Tensorflow and machine learning.
It is not best-practice frontend code (leaking function names to the global scope, etc).
I am sharing it here, so that someone else might get inspired as well.

## How do I know which gestures to use?

There are four positions for the right hand, and two for the left hand. Together they let you map out an octave.

Left hand low + four levels of the right hand maps to low C until F.
Left hand high(er) + four level of the right hand maps to G, A, B and finally the high C, which completes the octave.

__These are samples from the training data for the gestures.__

__Low C__
![Low C](https://github.com/aweijnitz/WavingHandsPiano/raw/master/demo-poses/c0.png "Low C")

__D__
![D](https://github.com/aweijnitz/WavingHandsPiano/raw/master/demo-poses/d.png "D")

__E__
![E](https://github.com/aweijnitz/WavingHandsPiano/raw/master/demo-poses/e.png "E")

__F__
![F](https://github.com/aweijnitz/WavingHandsPiano/raw/master/demo-poses/f.png "F")

__G__
![G](https://github.com/aweijnitz/WavingHandsPiano/raw/master/demo-poses/g.png "G")

__A__
![A](https://github.com/aweijnitz/WavingHandsPiano/raw/master/demo-poses/a.png "A")

__B__
![B](https://github.com/aweijnitz/WavingHandsPiano/raw/master/demo-poses/b.png "B")

__High C__
![High C](https://github.com/aweijnitz/WavingHandsPiano/raw/master/demo-poses/c1.png "High C")


## Key Technologies

- [Tensorflow.js](https://www.tensorflow.org/js)
- [Howler.js](https://howlerjs.com/)
- [HTML5 Boilerplate](https://html5boilerplate.com/)
- [Skeleton CSS](http://getskeleton.com/)
- Good old [jQuery](https://jquery.com/)
