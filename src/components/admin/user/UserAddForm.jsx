
const UserAddForm = () => {
    return (
        <form className="py-5">
            <div className='row grid grid-cols-2 gap-6'>
                <div className='flex flex-col'>
                    <label className='font-sans font-medium text-sm'>First name</label>
                    <input type="text" className='border border-gray-300 p-3 rounded-sm' />
                </div>
                <div className='flex flex-col'>
                    <label className='font-sans font-medium text-sm'>Email</label>
                    <input type="text" className='border border-gray-300 p-3 rounded-sm' />
                </div>
                <div className='flex flex-col'>
                    <label className='font-sans font-medium text-sm'>Mobile</label>
                    <input type="text" className='border border-gray-300 p-3 rounded-sm' />
                </div>
                <div className='flex flex-col'>
                    <label className='font-sans font-medium text-sm'>Password</label>
                    <input type="password" className='border border-gray-300 p-3 rounded-sm' />
                </div>
                <div className='flex flex-col'>
                    <label className='font-sans font-medium text-sm'>Role</label>
                    <select className='border border-gray-300 p-3 rounded-sm'>
                        {["Staff", "manager"].map((brand, index) => (
                            <option key={index}>{brand}</option>
                        ))}
                    </select>
                </div>

                <div className='flex flex-col'>
                    <label className='font-sans font-medium text-sm'>Gender</label>
                    <select className='border border-gray-300 p-3 rounded-sm'>
                        {["Male", "Female"].map((brand, index) => (
                            <option key={index}>{brand}</option>
                        ))}
                    </select>
                </div>

                <div className='flex flex-col'>
                    <label className='font-sans font-medium text-sm'>Status</label>
                    <select className='border border-gray-300 p-3 rounded-sm'>
                        {["Active", "Inactive"].map((brand, index) => (
                            <option key={index}>{brand}</option>
                        ))}
                    </select>
                </div>
            </div>
        </form>
    )
}

export default UserAddForm