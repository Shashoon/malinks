import './Modal.css';

const Modal = ({ toggleModal }) => {


    return (
        <div className="modal">
            <span className='modal-title'>Add Link</span>

            <span className='close-button' onClick={toggleModal}>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16"> <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" /> </svg>
            </span>
            <form onSubmit=''>
                <div className='form-input'>
                    <i className=''></i>
                    <input type='text' placeholder='Title' />
                    <span className='bar' />
                </div>
                <div className='form-input'>
                    <i className=''></i>
                    <input type='text' placeholder='Url' />
                    <span className='bar' />
                </div>
                <div className='form-input'>
                    <i className=''></i>
                    <input type='text' placeholder='Icon' />
                    <span className='bar' />
                </div>

                <button className='form-button' type='submit'>Add Link</button>
            </form>


        </div>
    )
}

export default Modal;