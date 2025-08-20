import './App.css'

import EditableText from "./components/EditableText.jsx";
import FaceCustomisation from "./components/FaceCustomisation.jsx";
import FullBody from "./components/FullBody.jsx";


function Quote({id}) {
    return (
        <div id={id}>
            {/*<Image />*/}
            {/*<Image />*/}

            <EditableText
                id={'quote'}
                className={'box-container'}
                storageKey={'quote'}
                placeholder={' '}
            />

        </div>
    )
}

function App() {
  //const [count, setCount] = useState(0)

  return (
    // <>
    //   <div>
    //     <a href="https://vite.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //
    //     <Container id={"test"} className={"a-container"} items={[
    //         <h1>Vite + React</h1>,
    //         <div className="card">
    //             <button onClick={() => setCount((count) => count + 1)}>
    //                 count is {count}
    //             </button>
    //             <p>
    //                 Edit <code>src/App.jsx</code> and save to test HMR
    //             </p>
    //         </div>,
    //         <p className="read-the-docs">
    //             Click on the Vite and React logos to learn more
    //         </p>,
    //     ]} />
    //
    // </>

      <>
          {/* main centerpiece */}

          <div id={'centerpiece'} className={'center-items'}>

              <EditableText
                  id={'name-tag'}
                  storageKey={'name-tag'}
                  placeholder={'MON'}
              />

              <FullBody
                  id={'character-body'}
              />

          </div>


          {/* profile pic, top left corner*/}
          <FaceCustomisation
              id={'profile-pic'}
              className={'box-container'}
          />

          {/* vibes, bottom left corner*/}

          <div id='vibes' className={'center-items box-container'}>
              <>before er quote</>
              <Quote id={'quote-1'} />
              <>after quote</>

              <div id={'vibes-images'} className={'center-items box-container'}>
                  <>vibes images</>
                  <div className="center-items square-image">
                    <img src={'/src/assets/react.svghttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6Ztbrx3By3hXfU8Z2tMZ70Mj5KEeOw5MLAQ&s'} alt={'vibe 1'}/>
                  </div>
                  <div className="center-items square-image"></div>
                  <div className="center-items square-image"></div>
              </div>


              {/*<Image className={'square-image'}/>*/}
              {/*<Image className={'square-image'}/>*/}
              {/*<Image className={'square-image'}/>*/}

          </div>





      </>

  )
}

export default App
