import React, {useState} from 'react';
import './index.css';
import Modal from "./Modal";



function App() {

      const [open, setOpen] = useState(false);

      return (
      <div className="App">


      <button onClick={() => setOpen(true)} className="open-modal-btn">✨ Открыть окно</button>


          {open && <Modal open={open} setOpen={setOpen}>
              <p>kkkkkkkkk</p>
              <img src="https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm00NzYtcGYtczEyNy1iLTA2MC5wbmc.png" />
              <p>ddddddddddddd</p>
          </Modal>}





      </div>
      );
    }

      export default App;

