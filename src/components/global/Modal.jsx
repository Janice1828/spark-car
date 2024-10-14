import { button } from 'framer-motion/client'
import React from 'react'

const Modal = ({ headerTitle, footerBtns, fullWForms, halfWForms }) => {
    return (<>
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-14 fw-600" id="exampleModalLabel">{headerTitle}</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <form>
                        <div className='row'>
                            {fullWForms.map((field, key) => (
                                <div className='col-12' key={key}>
                                    <label className='fs-14 fw-600 form-label'>{field.labelName}</label>
                                    <input type="text" className='form-control box-shadow-none' />
                                </div>
                            ))}
                        </div>
                        <div className='row gx-2 mt-3'>
                            {halfWForms.map((field, key) => (
                                <div key={key} className='col-6'>
                                    <label className='fs-14 fw-600 form-label' >{field.labelName}</label>
                                    <input type="text" className='form-control box-shadow-none' />
                                </div>
                            ))}
                        </div>

                    </form>
                </div>
                <div className="modal-footer">
                    {footerBtns.map((btn, key) => (
                        <button type='button' key={key} className={`${btn.bgColor} text-light border-0 rounded-1 px-4 py-2 fs-12`} data-bs-dismiss={btn.close ? 'modal' : undefined}>{btn.title}</button>
                    ))}

                </div>
            </div>
        </div >
    </>
    )
}
export default Modal