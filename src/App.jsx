import './App.css'

import EditableText from "./components/reusable/EditableText.jsx";
import FaceCustomisation from "./components/zones/FaceCustomisation.jsx";
import FullBody from "./components/zones/FullBody/FullBody.jsx";


function Quote({id}) {
    return (
        <div id={id} className='main-quote'>

            <EditableText
                id={'quote'}
                className={'box-container'}
                storageKey={'quote'}
                placeholder={'<Quote>'}
            />

        </div>
    )
}

function App() {
  //const [count, setCount] = useState(0)

  return (
      <div className='view-container'>
          {/* main centerpiece */}

          <div id={'centerpiece'} className={''}>

              <EditableText
                  id={'name-tag'}
                  storageKey={'name-tag'}
                  placeholder={'TITLE'}
              />

              <FullBody
                  id={'character-body'}
              />

          </div>


          {/* profile pic, top left corner*/}
          <div id='profile-pic' className={''}>
            <FaceCustomisation
                id={'face-customisation'}
                className={''}
            />
          </div>

          {/* vibes, bottom left corner*/}

          <div id='vibes' className={''}>
              <Quote id={'vibes-quote'} />

              <div id={'vibes-images'} className={''}>
                    
                  <div className="vibes-image">
                    <img src={'https://images.pdimagearchive.org/collections/plain-home-talk/plainhometalkabo00foot_0440.jpg?width=1165&height=800'} className='image-fit' alt={'vibe 1'}/>
                  </div>

                  <div className="vibes-image">
                    <img src={'https://images.pdimagearchive.org/collections/illustrative-plates-from-how-i-killed-the-tiger-1902/8741634084_e3ab29b075_o.jpg?width=820&height=800'} className='image-fit' alt={'vibe 2'}/>
                  </div>

              </div>


              {/**/}
              {/*<Image className={'square-image'}/>*/}
              {/*<Image className={'square-image'}/>*/}

          </div>

      </div>

  )
}

export default App
