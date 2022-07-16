import './form-input.style.scss';

const FormInput = ({ label, inputOptions}) => {
    return (
        <div className="group">
            {/* // sibling for shrink effect */}
            <input className=" form-input"{  ...inputOptions}/>
        {
        label && (
            <label className={`${inputOptions.value.length ? 'shrink' : '' } form-input-label`}>{label}</label>
            )
        }
        </div>
        );
}

export default FormInput;