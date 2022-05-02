import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from '@components/Navbar'

export default function Home() {
  return (    
    <div class="container-fluid d-flex flex-column">
      <div class="row vh-100 d-flex">
        <div class="col">
          <Head>
            <title>Masking Reality</title>
            <link href="https://fonts.googleapis.com/css2?family=Satisfy&family=Roboto&family=Patua+One&display=swap" rel="stylesheet"/>  
          </Head>        
          
          <div class="title text-center" id="Home">Masking Reality</div>
          <Navbar items={['Technical Development', 'Visual Development', 'Challenges', 'Meet the Team']}></Navbar>
          <div class="row d-flex gx-0" style={{height: "70%"}}>
            <div class="embed-responsive embed-responsive-16by9">
              <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/6QXY8Wz341Y" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </div>

      {
        // https://stackoverflow.com/questions/49225505/how-to-make-text-wrap-around-image-with-bootstrap-4-without-float0
      }

      <div class="row d-flex m-5">
        <div class="col">
          <div class="subtitle text-center" id="Technical Development">Technical Development</div>
          {/*
          <Navbar items={['Visual Development', 'Challenges', 'Meet the Team', 'Home']}></Navbar>
          */}
          <div class="image-wrapper float-start p-3">
            <img class="img-fluid" width="600px" height="300px"></img>
          </div>
          <div class="single-post-content-wrapper p-3">          
            Most technical development occurred within three aspects of our project: integration with Unreal, proceduralism, and working with our MetaHuman lead “actor.” Unreal was used very early on in our development as a pre-viz tool, allowing us to quickly iterate on lighting and look dev for the entirety of the film. The “virtual world” portion was rendered completely real-time in Unreal for the final video. The usage of the engine also enabled us to employ Houdini in full effect, as HDA (Houdini Digital Asset) creation allowed us to quickly create the procedural caves and cliffs seen in this portion of the film. Being able to work realtime and seeing our creative decisions unfold so quickly gave us the confidence to pursue our artistic vision.
            <br/><br/>
            The usage of MetaHuman created some exciting creative opportunities as well. Having access to such a high quality digital actor in the cyberpunk “reality” portion of our video was essential to effective storytelling, especially with our added interest of using custom motion capture data. Though most of the motions seen in this film are from Mixamo, we did get a chance to record, clean, and implement our own data using OptiTrack Motive (later retargeted using Maya’s HumanIK). The benefit of this pipeline is that it plays well with the scrappiness of the creative process. We found plenty of room for experimentation both technically and creatively, leading to many exciting developments in our workflow. 
          </div>
          <div class="row flex-row position-static justify-content-around" style={{"min-width" : "100%"}}>
            <figure style={{"max-width": "500px"}}>
              <img class="img-fluid figure-img"  height="auto" src="img/mocapOmarTest.gif"/>
              <figcaption class="figure-caption text-center">Early motion capture tests for our MetaHuman</figcaption>
            </figure>
            <figure style={{"max-width": "400px"}}>
              <img class="img-fluid figure-img"  height="auto" src="img/mocapCleanup.gif"/>
              <figcaption class="figure-caption text-center">First-pass clean up of our motion data</figcaption>
            </figure>
            <figure style={{"max-width": "400px"}}>
              <img class="img-fluid figure-img"  height="auto" src="img/mocapOmarTest.gif"/>
              <figcaption class="figure-caption text-center">A caption for the above image.</figcaption>
            </figure>
          </div>              
        </div>         
      </div>
      
      <div class="row d-flex">
        <div class="col">
          <div class="subtitle text-center" id="Visual Development">Visual Development</div>
          {/*
          <Navbar items={['Challenges', 'Technical Development', 'Meet the Team', 'Home']}></Navbar>
          */}
          <figure class="float-end m-2" style={{"max-width": "800px", "width": "40%"}}>
            <img class="img-fluid figure-img"  height="auto" src="img/testRenderProgress.gif"/>
            <figcaption class="figure-caption text-center">Progress shots of the City</figcaption>
          </figure>
          <div class="single-post-content-wrapper p-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempus augue sit amet tellus ullamcorper, quis ultricies velit tempus. Praesent tincidunt, sem in porttitor convallis, nunc purus pellentesque libero, nec efficitur metus leo ac nunc. In tempus arcu turpis, nec interdum metus tempus non. Nulla at vestibulum elit, eu vestibulum est. Integer rhoncus orci id dui varius, sagittis faucibus turpis aliquet. Morbi ornare elementum lorem, sit amet gravida magna accumsan quis. Maecenas rutrum pulvinar eros, nec porta mi condimentum eu. Mauris et ultrices erat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam hendrerit, turpis a blandit mattis, ligula felis congue ipsum, ac euismod mi arcu non odio. Nulla porttitor augue eget mi pulvinar gravida. Etiam eu lectus non elit tincidunt venenatis. Aliquam sit amet quam scelerisque, bibendum ex a, lobortis justo. 
            <br/>
            <figure class="float-start m-4" style={{"max-width": "600px", "width": "40%"}}>
              <img class="img-fluid figure-img"  height="auto" src="img/barSceneTest.gif"/>
              <figcaption class="figure-caption text-center">Test animation of the Bar scene</figcaption>
            </figure>
            <br/>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempus augue sit amet tellus ullamcorper, quis ultricies velit tempus. Praesent tincidunt, sem in porttitor convallis, nunc purus pellentesque libero, nec efficitur metus leo ac nunc. In tempus arcu turpis, nec interdum metus tempus non. Nulla at vestibulum elit, eu vestibulum est. Integer rhoncus orci id dui varius, sagittis faucibus turpis aliquet. Morbi ornare elementum lorem, sit amet gravida magna accumsan quis. Maecenas rutrum pulvinar eros, nec porta mi condimentum eu. Mauris et ultrices erat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam hendrerit, turpis a blandit mattis, ligula felis congue ipsum, ac euismod mi arcu non odio. Nulla porttitor augue eget mi pulvinar gravida. Etiam eu lectus non elit tincidunt venenatis. Aliquam sit amet quam scelerisque, bibendum ex a, lobortis justo. 
          </div>   
          
        </div>       
      </div>
      <div class="row d-flex">
        <div class="col">
          <div class="subtitle text-center" id="Challenges">Challenges</div>
          {/*
            <Navbar items={['Visual Development', 'Technical Development', 'Meet the Team', 'Home']}></Navbar>
          */}
            <div class="row d-flex justify-content-around">
              <div class="col-6 text-center">
                There were plenty of challenges met during the course of this project. In the early stages, we toyed with working in Unity and taking advantage of the Universal Render Pipeline (URP), as some of the Houdini assets used were already implement in that engine. As we progressed, we realized that Unreal would be worth the effort to port over our progress, mostly to take advantage of MetaHuman and the excellent real-time lighting. It was originally intended that we’d do all of the film in Unreal, but due to incompatibility with Blender’s Poligon plugin (which we were using for textures), we decided it would be for the best to just split the rendering amongst the two programs. The VR scene was done in Unreal, while the real world scene was rendered in Blender.
              </div>    
            </div>
          </div>      
      </div>
      <div class="row d-flex">
        <div class="col">
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
