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
          <Navbar items={['Creative Development', 'Technical Development', 'Challenges', 'Meet the Team']}></Navbar>
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
          <div class="subtitle text-center" id="Creative Development">Creative Development</div>
          {/*
          <Navbar items={['Challenges', 'Technical Development', 'Meet the Team', 'Home']}></Navbar>
          */}
          <figure class="float-end m-2" style={{"max-width": "800px", "width": "40%"}}>
            <img class="img-fluid figure-img"  height="auto" src="img/testRenderProgress.gif"/>
            <figcaption class="figure-caption text-center">Progress shots of the City</figcaption>
          </figure>
          <div class="single-post-content-wrapper p-3">
            The visual foundations for “Masking Reality” started from a few concept sketches. We were heavily inspired by the worlds of “Ready Player One” and “Cyberpunk 2077,” and drew on these settings as we went forward with our creative decisions. One of the main appeals of combining realities is the ability to make stylistic shifts in visual presentation. The “City” scene epitomizes the grittiness of a cyberpunk reality: it’s stylish and flashy, yet uninviting and distant. In a lively bar, our main actor needs to escape the constant drone of flashing neon and boisterous crowds. The virtual world offers this escape. Inspired by the world of “Horizon: Zero Dawn,” we transition into an almost-fairytale setting: a lush valley with towering cliffs and thundering waterfalls, offering quite the contrast to the dark reality we just witnessed.
            <br/>
            <figure class="float-start m-4" style={{"max-width": "600px", "width": "40%"}}>
              <img class="img-fluid figure-img"  height="auto" src="img/barSceneTest.gif"/>
              <figcaption class="figure-caption text-center">Test animation of the Bar scene</figcaption>
            </figure>
            <br/>
              The story of “Masking Reality” is kept light, so as not to distract from our personal goals as a group. This project served as a massive learning experience for all of us. Between time management and asset organization, there was plenty for us to pick up on along the way. We sought a careful balance between the technical and creative output for our workflow. All group members served both visual and technical roles throughout the production of this film, allowing everyone to achieve high degrees of creative freedom to make however they saw fit. Being able to switch roles on the fly has served us well from a teamwork perspective as well, as we weren’t solely reliant on a single teammate to make technical or creative decisions. 
              
              Thanks to some powerful tools at our disposal (see “Technical Development”), we were able to follow through with our creative plans. 
          </div>
          <div class="row flex-row position-static justify-content-around" style={{"min-width" : "100%"}}>
            <figure style={{"max-width": "700px", "width" : "45%"}}>
              <img class="img-fluid figure-img"  height="auto" src="img/goggles wip.png"/>
              <figcaption class="figure-caption text-center">VR Goggles Model</figcaption>
            </figure>
            <figure style={{"max-width": "700px", "width" : "45%"}}>
              <img class="img-fluid figure-img"  height="auto" src="img/earlyCave.png"/>
              <figcaption class="figure-caption text-center">Early work in Houdini for the VR world</figcaption>
            </figure>
          </div>  
        </div>       
      </div>

      <div class="row d-flex m-5">
        <div class="col">
          <div class="subtitle text-center" id="Technical Development">Technical Development</div>
          {/*
          <Navbar items={['Visual Development', 'Challenges', 'Meet the Team', 'Home']}></Navbar>
          */}
          <div class="image-wrapper float-start p-3" style={{"max-width": "900px", "width" : "100%"}}>
            <figure>
              <img class="img-fluid figure-img w-100" height="auto" src="img/previz.png"/>
              <figcaption class="figure-caption text-center">Pre-viz in Unreal for the early stages</figcaption>
            </figure>
          </div>
          <div class="single-post-content-wrapper p-3">          
            Most technical development occurred within three aspects of our project: integration with Unreal, proceduralism, and working with our MetaHuman lead “actor.” Unreal was used very early on in our development as a pre-viz tool, allowing us to quickly iterate on lighting and look dev for the entirety of the film. The “virtual world” portion was rendered completely real-time in Unreal for the final video. The usage of the engine also enabled us to employ Houdini in full effect, as HDA (Houdini Digital Asset) creation allowed us to quickly create the procedural caves and cliffs seen in this portion of the film. Being able to work realtime and seeing our creative decisions unfold so quickly gave us the confidence to pursue our artistic vision.
            <br/><br/>
            The usage of MetaHuman created some exciting creative opportunities as well. Having access to such a high quality digital actor in the cyberpunk “reality” portion of our video was essential to effective storytelling, especially with our added interest of using custom motion capture data. Though most of the motions seen in this film are from Mixamo, we did get a chance to record, clean, and implement our own data using OptiTrack Motive (later retargeted using Maya’s HumanIK). The benefit of this pipeline is that it plays well with the scrappiness of the creative process. We found plenty of room for experimentation both technically and creatively, leading to many exciting developments in our workflow. 
          </div>
          <div class="row flex-row position-static justify-content-around" style={{"min-width" : "100%"}}>
            <figure style={{"max-width": "500px", "width" : "30%"}}>
              <img class="img-fluid figure-img"  height="auto" src="img/mocapOmarTest.gif"/>
              <figcaption class="figure-caption text-center">Early motion capture tests for our MetaHuman</figcaption>
            </figure>
            <figure style={{"max-width": "350px", "width" : "30%"}}>
              <img class="img-fluid figure-img"  height="auto" src="img/mocapCleanup.gif"/>
              <figcaption class="figure-caption text-center">First-pass clean up of our motion data</figcaption>
            </figure>
            <figure style={{"max-width": "600px", "width" : "30%"}}>
              <img class="img-fluid figure-img"  height="auto" src="img/cliffHDA.png"/>
              <figcaption class="figure-caption text-center">VR World Cliff HDA</figcaption>
            </figure>
          </div>              
        </div>         
      </div>
      
      <div class="row d-flex m-5">
        <div class="col vh-100">
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
      <div class="row d-flex gx-0">
        <div class="col">
          <div class="subtitle text-center" id="Meet the Team">Meet the Team</div>
        </div>          
        <div class="row d-flex gx-0 vh-100 flex-row">
          <div class="col-4 text-center">
            <img class="img-fluid portrait" src="img/janiece.png"></img>
            <p class="h3">JaNiece Campbell</p>
            <p>Pipeline/Motion Capture TD</p>
          </div>              
          <div class="col-4 text-center">
            <img class="img-fluid portrait" src="img/jacob.png"></img>
            <p class="h3">Jacob Wynn</p>
            <p>Environment Creation Artist</p>
          </div>              
          <div class="col-4 text-center">
            <img class="img-fluid portrait" src="img/justin.png"></img>
            <p class="h3">Justin Dearing</p>
            <p>VFX & Environment Artist</p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}
