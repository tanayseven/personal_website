import React from 'react'
import Typography from 'material-ui/Typography'
import Card from "material-ui/Card/Card";
import Avatar from "material-ui/es/Avatar/Avatar";

export default () => (
  <div>
    <Card
      style={{padding: '20px 20px 20px'}}
    >
      <Typography type='display1'>
        <p>Hi, I'm Tanay PrabhuDesai</p>
      </Typography>
      <Avatar
        alt='Tanay PrabhuDesai'
        src='/images/profile/tanay-profile.jpg'
        style={{display: 'block', margin: '0 auto', width: '300px', minWidth: '50px', height: '300px', minHeight: '50px'}}
      />
      <Typography type='subheading'>
        <p>
          I love writing code and it gives me intense pleasure while doing so. Therefore, I’m going to
          give a brief history of how it led to the development of this interest in me. Since I was a
          kid, I was fascinated by computers. When I was 3, I started to play games on the computer by
          executing DOS commands. By the time I reached my teens I was very sure of entering the world
          of software and do programming. Throughout my childhood, my toys were mechanical building
          things with metallic parts and attaching all those together. Others toys made up things like
          wires little electric motors and bulbs. The reason my parents gifted me these? They knew that
          I had a huge interest in technical stuff. Fast forward to me being 16, I had tried multiple
          times now and had failed to learn to program on my own. I finally got my hands on a C
          programming book and out of interest, I started learning C programming by typing out the
          programs on the ancient Turbo C compiler. I finally had started to learn to program and I
          continued to learn different languages and learnt different techniques. I, later on, developed
          a lot of interest in learning the different programming paradigms. I also still am interested
          in different paradigms, philosophies and principles on which different languages are based.
          Also, I’m interested in theoretical computer science and learning new things with respect to
          computer science.
        </p>

        <p>
          Just being interested in programming does not satisfy me. I love to be creative and try to
          work on my own personal project. I have worked on quite a lot of my own/personal projects and
          learnt a lot of new things. And no, this is not about the past, I still do work on personal
          projects. I believe that mastering different frameworks and tools can be done in this way.
          Also, something innovative can be made in this way. And it is fun when you having complete
          control on whatever you're coding, this helps in having fun while coding. Apart from just
          making personal projects, I like to write and talk. I’m also very interested in other science
          and technology, mainly physics and astronomy. I watch a lot of videos about science online and
          read some posts. No matter what field you work in creativity is very much needed in order to do
          something amazing in that field.
        </p>

        <p>
          Other than the technical things that I do in my life, I love to go out and spend time in
          nature, explore different places. Also, there is something special about getting special
          pleasures from small things in life. It can be something as small as getting a cup of coffee on
          a small tea stall on a cold morning or having a small evening walk. Listening to music which is
          happy or which is sad can have a really nice effect on the mood. I'm right now learning to play
          the guitar. Even though I'm from a very scientific background, I appreciate art a lot. There
          is something from the universe that is embedded in the art that makes it look so natural and
          beautiful.
        </p>
      </Typography>
    </Card>
  </div>
)
