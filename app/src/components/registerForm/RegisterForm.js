

export default function BuyerForm(inputChange) {
    return(
        <div className="form-control m-1 p-2 flex flex-col text-center text-white  text-xl font-serif">
            <label htmlFor="floatingInputValue" className="m-2">{inputChange.text}</label>
            <input className="form-control text-2xl text-black hover:bg-gray-500" name={inputChange.type} type="text" onChange={inputChange.onChange} />
        </div>
    )
}