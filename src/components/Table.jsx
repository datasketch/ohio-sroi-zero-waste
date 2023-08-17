import classNames from 'classnames';
import TableAccordion from './TableAccordion';
import { useState } from 'react';

export default function Table({ color }) {
    const [isOpen, setIsOpen] = useState(false)
    const isGeneric = color === '#00694E'
    return (
        <div className='rounded-2xl overflow-hidden'>
            {/* HEADING */}
            <div className='pt-5 pb-2.5 pl-5 pr-8' style={{
                backgroundColor: isGeneric ? '#fff' : color
            }}>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-x-2'>
                        <h3 className={classNames('text-xl', { 'text-white': !isGeneric, 'text-black': isGeneric })}>Economic impact</h3>
                        <button>
                            {!isGeneric && (<img src="/images/icons/information-icon.svg" alt="information icon" />)}
                            {isGeneric && (<img src="/images/icons/information-generic-icon.svg" alt="information icon" />)}
                        </button>
                    </div>
                    <div className='flex items-center gap-x-4'>
                        <p className={classNames('text-sm', { 'text-white': !isGeneric, 'text-gray-2': isGeneric })}>
                            Total Value
                        </p>
                        <div className={classNames('bg-white rounded py-0.5 px-5', { 'border': isGeneric })} style={{ borderColor: color }}>
                            <p className='text-xl'><span className='text-silver-2'>$</span> 2,908,009.05</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* ROW SUB HEADING */}
            <div className='grid grid-cols-12 py-1 px-5 bg-white'>
                <div className="col-span-3">
                    <h4 className='text-gray-2 text-sm'>
                        Stakeholders
                    </h4>
                </div>
                <div className="col-span-7">
                    <h4 className='text-gray-2 text-sm'>
                        Outcomes
                    </h4>
                </div>
                <div className="col-span-2">
                    <h4 className='text-gray-2 text-sm'>
                        Value
                    </h4>
                </div>
            </div>
            <TableAccordion setIsOpen={setIsOpen} color={color} />
            <div className='flex items-center justify-between py-4 px-5 bg-white'>
                <div>
                    <p className={classNames('text-gray-2 text-sm duration-300', { 'invisible opacity-0': isOpen, 'visible opacity-100': !isOpen })}>
                        Formula
                    </p>
                </div>
                <div className='pr-[4vw]'>
                    <p className={classNames('text-gray-2 text-sm duration-300', { 'invisible opacity-0': isOpen, 'visible opacity-100': !isOpen })}>
                        75.67 + 250.00 + 19.50 + 350 + 430 = 2,908,009.05
                    </p>
                </div>
            </div>
        </div>
    )
}