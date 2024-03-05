import React from 'react'
import FormDangKy from './components/form-dang-ky/form-dang-ky'
import StudentTable from './components/student-table'

function QuanLySinhVien() {
  return (
    <div className='container'>
        <div className="title" style={{backgroundColor:'black'}}>
            <h4 className='text-white p-3'>Thông tin sinh viên</h4>
        </div>
        <FormDangKy/>
        <div className='mt-5'> 
        <StudentTable/>
        </div>
    </div>
  )
}

export default QuanLySinhVien