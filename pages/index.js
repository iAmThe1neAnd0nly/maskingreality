import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from '@components/Navbar'

export default function Home() {
  return (    
    <div class="container-fluid d-flex flex-column">
      <Head>
      <link href="https://fonts.googleapis.com/css2?family=Satisfy&family=Patua+One&display=swap" rel="stylesheet"/>  
      </Head>
      <div class="row d-flex vh-100">
        <div class="col">
          <div class="title text-center" id="Home">Masking Reality</div>
          <Navbar items={['Technical Development', 'Worldbuilding', 'Motion Capture', 'Meet the Team']}></Navbar>
          <div class="row d-flex gx-0" style={{height: "70%"}}>
            <div class="embed-responsive embed-responsive-16by9">
              <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/6QXY8Wz341Y" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </div>
      {/*}
      <article class="row  mt-5 no-gutters">
        <div class="col-md-6">
          <div class="image-wrapper float-start pe-4 ">
              <img src="https://placeimg.com/150/150/animals" alt=""/>
          </div>
          <div class="single-post-content-wrapper p-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil ad, ex eaque fuga minus reprehenderit asperiores earum incidunt. Possimus maiores dolores voluptatum enim soluta omnis debitis quam ab nemo necessitatibus.
              <br/><br/>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil ad, ex eaque fuga minus reprehenderit asperiores earum incidunt. Possimus maiores dolores voluptatum enim soluta omnis debitis quam ab nemo necessitatibus.
          </div>
        </div>
      </article>
      */}
      
      <div class="row vh-100 d-flex">
        <div class="col">
          <div class="subtitle text-center" id="Technical Development">Technical Development</div>
          <Navbar items={['Worldbuilding', 'Motion Capture', 'Meet the Team', 'Home']}></Navbar>
          <div class="image-wrapper float-start p-3">
            <img class="img-fluid" width="600px" height="300px"></img>
          </div>
          <div class="single-post-content-wrapper p-3">          
            Most technical development occurred within three aspects of our project: integration with Unreal, proceduralism, and working with our MetaHuman lead “actor.” Unreal was used very early on in our development as a pre-viz tool, allowing us to quickly iterate on lighting and look dev for the entirety of the film. The “virtual world” portion was rendered completely real-time in Unreal for the final video. The usage of the engine also enabled us to use Houdini to full effect, as an HDA (Houdini Digital Asset) allowed us to quickly create the caves and cliffs scene in this portion of the short.
            <br/><br/>
            The usage of MetaHuman created some exciting creative opportunities as well. Having access to such a high quality digital actor in the cyberpunk “reality” portion of our video was essential to effective storytelling, especially with our added interest of using custom motion capture data. Though most of the motions seen in this film are from Mixamo, we did get a chance to record, clean, and implement our own data using OptiTrack Motive (later retargeted using Maya’s HumanIK). 
          </div>
          <div class="row d-flex flex-row justify-content-around">
            <img class="img-fluid" style={{"max-width": "400px"}} height="auto" src="img/mocapOmarTest.gif"></img>
            <img class="img-fluid" style={{"max-width": "400px"}} src="img/mocapOmarTest.gif"></img>
            <img class="img-fluid" style={{"max-width": "400px"}} src="img/mocapOmarTest.gif"></img>
          </div>              
        </div>         
      </div>
      
      <div class="row vh-100 d-flex">
        <div class="subtitle text-center" id="Motion Capture">Motion Capture</div>
          <Navbar items={['Worldbuilding', 'Technical Development', 'Meet the Team', 'Home']}></Navbar>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempus augue sit amet tellus ullamcorper, quis ultricies velit tempus. Praesent tincidunt, sem in porttitor convallis, nunc purus pellentesque libero, nec efficitur metus leo ac nunc. In tempus arcu turpis, nec interdum metus tempus non. Nulla at vestibulum elit, eu vestibulum est. Integer rhoncus orci id dui varius, sagittis faucibus turpis aliquet. Morbi ornare elementum lorem, sit amet gravida magna accumsan quis. Maecenas rutrum pulvinar eros, nec porta mi condimentum eu. Mauris et ultrices erat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam hendrerit, turpis a blandit mattis, ligula felis congue ipsum, ac euismod mi arcu non odio. Nulla porttitor augue eget mi pulvinar gravida. Etiam eu lectus non elit tincidunt venenatis. Aliquam sit amet quam scelerisque, bibendum ex a, lobortis justo. 
          </p>          
      </div>
      <div class="row vh-100 d-flex">
        <div class="subtitle text-center" id="Worldbuilding">Worldbuilding</div>
          <Navbar items={['Motion Capture', 'Technical Development', 'Meet the Team', 'Home']}></Navbar>
          
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempus augue sit amet tellus ullamcorper, quis ultricies velit tempus. Praesent tincidunt, sem in porttitor convallis, nunc purus pellentesque libero, nec efficitur metus leo ac nunc. In tempus arcu turpis, nec interdum metus tempus non. Nulla at vestibulum elit, eu vestibulum est. Integer rhoncus orci id dui varius, sagittis faucibus turpis aliquet. Morbi ornare elementum lorem, sit amet gravida magna accumsan quis. Maecenas rutrum pulvinar eros, nec porta mi condimentum eu. Mauris et ultrices erat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam hendrerit, turpis a blandit mattis, ligula felis congue ipsum, ac euismod mi arcu non odio. Nulla porttitor augue eget mi pulvinar gravida. Etiam eu lectus non elit tincidunt venenatis. Aliquam sit amet quam scelerisque, bibendum ex a, lobortis justo. 
          </p>          
      </div>
      <div class="row vh-100 d-flex">
        <div class="row">
          <div class="subtitle text-center" id="Meet the Team">Meet the Team</div>
          <Navbar items={['Home']}></Navbar>
        </div>          
        <div class="row d-flex flex-row">
          <div class="col-4 text-center">
            <img class="img-fluid portrait" src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"></img>
            <p class="h3">JaNiece Campbell</p>
            <p>Pipeline/Motion Capture TD</p>
          </div>              
          <div class="col-4 text-center">
            <img class="img-fluid portrait" src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"></img>
            <p class="h3">Jacob Wynn</p>
            <p>Insert Title Here</p>
          </div>              
          <div class="col-4 text-center">
            <img class="img-fluid portrait" src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"></img>
            <p class="h3">Justin Dearing</p>
            <p>Insert Title Here</p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}
