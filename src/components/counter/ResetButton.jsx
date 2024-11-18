import './ResetButton.css'

export default function ResetButton({ resetMethod }) {

    function reset() {
        resetMethod();
    }

    return (
        <div>
            <button className="reset" onClick={reset}>Reset</button>
        </div>
    )
}