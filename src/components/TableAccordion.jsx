import * as Accordion from '@radix-ui/react-accordion';
import { ChevronRightIcon } from '@radix-ui/react-icons';
import hexRgb from 'hex-rgb';
import { useState } from 'react';

export default function TableAccordion({ color = '#00694E', setIsOpen }) {
    const rgb = hexRgb(color, { format: 'array', alpha: 0.1 })
    const rgba = `rgba(${rgb.join(', ')})`

    // HANDLERS
    const getDataState = (e) => {
        const isOpen = e.target.closest('.AccordionTrigger').getAttribute('data-state') !== 'open'
        setIsOpen(isOpen)
    }

    return (
        <Accordion.Root type="single" collapsible>
            {/* ROW CONTENT */}
            <Accordion.Item className='AccordionItem' value="item-1">
                <Accordion.Header className='AccordionHeader' style={{ color: rgb, backgroundColor: rgba, borderColor: color }}>
                    <div className="col-span-3">
                        <h4 className='text-black'>
                            Community
                        </h4>
                    </div>
                    <div className="col-span-7">
                        <h4 className='text-black'>
                            Earn a wage during the internship
                        </h4>
                    </div>
                    <div className="col-span-2 flex items-center gap-x-8">
                        <h4 className='text-sm font-semibold text-black'>
                            $250.00
                        </h4>
                        <Accordion.Trigger onClick={(e) => getDataState(e)} className="AccordionTrigger" style={{ backgroundColor: color }}>
                            <ChevronRightIcon className="AccordionChevron" aria-hidden />
                        </Accordion.Trigger>
                    </div>
                </Accordion.Header>
                {/* DESCRIPTION */}
                <Accordion.Content className="AccordionContent" style={{ backgroundColor: rgba, borderColor: color }}>
                    <div className='AccordionContentChildren' style={{ borderColor: color }}>
                        <div className="col-span-3">
                            <p className='text-black text-sm'>
                                Proxy
                            </p>
                        </div>
                        <div className="col-span-7">
                            <div className='space-y-2'>
                                <p className='text-black text-sm'>
                                    Number of students who helped by the internship to choose a college major
                                </p>
                                <p className='text-black text-sm'>
                                    Number of students who helped by the internship to choose a college major
                                </p>
                                <p className='text-black text-sm'>
                                    Number of students who helped by the internship to choose a college major
                                </p>
                                <p className='text-black text-sm'>
                                    Number of students who helped by the internship to choose a college major
                                </p>
                                <p className='text-black text-sm'>
                                    Number of students who helped by the internship to choose a college major
                                </p>
                            </div>
                        </div>
                        <div className="col-span-2">
                            <div className='space-y-2'>
                                <p className='text-sm font-semibold translate-x-9'>
                                    45
                                </p>
                                <p className='text-sm font-semibold translate-x-9'>
                                    45
                                </p>
                                <p className='text-sm font-semibold translate-x-9'>
                                    45
                                </p>
                                <p className='text-sm font-semibold translate-x-9'>
                                    45
                                </p>
                                <p className='text-sm font-semibold translate-x-9'>
                                    45
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* ROW FOOTER */}
                    <div className='AccordionContentFooter' style={{ borderColor: rgba }}>
                        <div className="col-span-3">
                            <p className='text-gray-2 text-sm'>
                                Formula
                            </p>
                        </div>
                        <div className="col-span-6">
                            <p className='text-black text-sm'>
                                &nbsp;
                            </p>
                        </div>
                        <div className="col-span-3">
                            <p className='text-gray-2 text-sm'>
                                7545+45+45= 250.00
                            </p>
                        </div>
                    </div>
                </Accordion.Content>
            </Accordion.Item>
            {/* ROW CONTENT */}
            <Accordion.Item className='AccordionItem' value="item-2">
                <Accordion.Header className='AccordionHeader' style={{ color: rgb, backgroundColor: rgba, borderColor: color }}>
                    <div className="col-span-3">
                        <h4 className='text-black'>
                            Community
                        </h4>
                    </div>
                    <div className="col-span-7">
                        <h4 className='text-black'>
                            Earn a wage during the internship
                        </h4>
                    </div>
                    <div className="col-span-2 flex items-center gap-x-8">
                        <h4 className='text-sm font-semibold text-black'>
                            $250.00
                        </h4>
                        <Accordion.Trigger onClick={(e) => getDataState(e)} className="AccordionTrigger" style={{ backgroundColor: color }}>
                            <ChevronRightIcon className="AccordionChevron" aria-hidden />
                        </Accordion.Trigger>
                    </div>
                </Accordion.Header>
                {/* DESCRIPTION */}
                <Accordion.Content className="AccordionContent" style={{ backgroundColor: rgba, borderColor: color }}>
                    <div className='AccordionContentChildren' style={{ borderColor: color }}>
                        <div className="col-span-3">
                            <p className='text-black text-sm'>
                                Proxy
                            </p>
                        </div>
                        <div className="col-span-7">
                            <div className='space-y-2'>
                                <p className='text-black text-sm'>
                                    Number of students who helped by the internship to choose a college major
                                </p>
                                <p className='text-black text-sm'>
                                    Number of students who helped by the internship to choose a college major
                                </p>
                                <p className='text-black text-sm'>
                                    Number of students who helped by the internship to choose a college major
                                </p>
                                <p className='text-black text-sm'>
                                    Number of students who helped by the internship to choose a college major
                                </p>
                                <p className='text-black text-sm'>
                                    Number of students who helped by the internship to choose a college major
                                </p>
                            </div>
                        </div>
                        <div className="col-span-2">
                            <div className='space-y-2'>
                                <p className='text-sm font-semibold translate-x-9'>
                                    45
                                </p>
                                <p className='text-sm font-semibold translate-x-9'>
                                    45
                                </p>
                                <p className='text-sm font-semibold translate-x-9'>
                                    45
                                </p>
                                <p className='text-sm font-semibold translate-x-9'>
                                    45
                                </p>
                                <p className='text-sm font-semibold translate-x-9'>
                                    45
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* ROW FOOTER */}
                    <div className='AccordionContentFooter' style={{ borderColor: rgba }}>
                        <div className="col-span-3">
                            <p className='text-gray-2 text-sm'>
                                Formula
                            </p>
                        </div>
                        <div className="col-span-6">
                            <p className='text-black text-sm'>
                                &nbsp;
                            </p>
                        </div>
                        <div className="col-span-3">
                            <p className='text-gray-2 text-sm'>
                                7545+45+45= 250.00
                            </p>
                        </div>
                    </div>
                </Accordion.Content>
            </Accordion.Item>
            {/* ROW CONTENT */}
            <Accordion.Item className='AccordionItem' value="item-3">
                <Accordion.Header className='AccordionHeader' style={{ color: rgb, backgroundColor: rgba, borderColor: color }}>
                    <div className="col-span-3">
                        <h4 className='text-black'>
                            Community
                        </h4>
                    </div>
                    <div className="col-span-7">
                        <h4 className='text-black'>
                            Earn a wage during the internship
                        </h4>
                    </div>
                    <div className="col-span-2 flex items-center gap-x-8">
                        <h4 className='text-sm font-semibold text-black'>
                            $250.00
                        </h4>
                        <Accordion.Trigger onClick={(e) => getDataState(e)} className="AccordionTrigger" style={{ backgroundColor: color }}>
                            <ChevronRightIcon className="AccordionChevron" aria-hidden />
                        </Accordion.Trigger>
                    </div>
                </Accordion.Header>
                {/* DESCRIPTION */}
                <Accordion.Content className="AccordionContent" style={{ backgroundColor: rgba, borderColor: color }}>
                    <div className='AccordionContentChildren' style={{ borderColor: color }}>
                        <div className="col-span-3">
                            <p className='text-black text-sm'>
                                Proxy
                            </p>
                        </div>
                        <div className="col-span-7">
                            <div className='space-y-2'>
                                <p className='text-black text-sm'>
                                    Number of students who helped by the internship to choose a college major
                                </p>
                                <p className='text-black text-sm'>
                                    Number of students who helped by the internship to choose a college major
                                </p>
                                <p className='text-black text-sm'>
                                    Number of students who helped by the internship to choose a college major
                                </p>
                                <p className='text-black text-sm'>
                                    Number of students who helped by the internship to choose a college major
                                </p>
                                <p className='text-black text-sm'>
                                    Number of students who helped by the internship to choose a college major
                                </p>
                            </div>
                        </div>
                        <div className="col-span-2">
                            <div className='space-y-2'>
                                <p className='text-sm font-semibold translate-x-9'>
                                    45
                                </p>
                                <p className='text-sm font-semibold translate-x-9'>
                                    45
                                </p>
                                <p className='text-sm font-semibold translate-x-9'>
                                    45
                                </p>
                                <p className='text-sm font-semibold translate-x-9'>
                                    45
                                </p>
                                <p className='text-sm font-semibold translate-x-9'>
                                    45
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* ROW FOOTER */}
                    <div className='AccordionContentFooter' style={{ borderColor: rgba }}>
                        <div className="col-span-3">
                            <p className='text-gray-2 text-sm'>
                                Formula
                            </p>
                        </div>
                        <div className="col-span-6">
                            <p className='text-black text-sm'>
                                &nbsp;
                            </p>
                        </div>
                        <div className="col-span-3">
                            <p className='text-gray-2 text-sm'>
                                7545+45+45= 250.00
                            </p>
                        </div>
                    </div>
                </Accordion.Content>
            </Accordion.Item>
            {/* ROW CONTENT */}
            <Accordion.Item className='AccordionItem' value="item-4">
                <Accordion.Header className='AccordionHeader' style={{ color: rgb, backgroundColor: rgba, borderColor: color }}>
                    <div className="col-span-3">
                        <h4 className='text-black'>
                            Community
                        </h4>
                    </div>
                    <div className="col-span-7">
                        <h4 className='text-black'>
                            Earn a wage during the internship
                        </h4>
                    </div>
                    <div className="col-span-2 flex items-center gap-x-8">
                        <h4 className='text-sm font-semibold text-black'>
                            $250.00
                        </h4>
                        <Accordion.Trigger onClick={(e) => getDataState(e)} className="AccordionTrigger" style={{ backgroundColor: color }}>
                            <ChevronRightIcon className="AccordionChevron" aria-hidden />
                        </Accordion.Trigger>
                    </div>
                </Accordion.Header>
                {/* DESCRIPTION */}
                <Accordion.Content className="AccordionContent" style={{ backgroundColor: rgba, borderColor: color }}>
                    <div className='AccordionContentChildren' style={{ borderColor: color }}>
                        <div className="col-span-3">
                            <p className='text-black text-sm'>
                                Proxy
                            </p>
                        </div>
                        <div className="col-span-7">
                            <div className='space-y-2'>
                                <p className='text-black text-sm'>
                                    Number of students who helped by the internship to choose a college major
                                </p>
                                <p className='text-black text-sm'>
                                    Number of students who helped by the internship to choose a college major
                                </p>
                                <p className='text-black text-sm'>
                                    Number of students who helped by the internship to choose a college major
                                </p>
                                <p className='text-black text-sm'>
                                    Number of students who helped by the internship to choose a college major
                                </p>
                                <p className='text-black text-sm'>
                                    Number of students who helped by the internship to choose a college major
                                </p>
                            </div>
                        </div>
                        <div className="col-span-2">
                            <div className='space-y-2'>
                                <p className='text-sm font-semibold translate-x-9'>
                                    45
                                </p>
                                <p className='text-sm font-semibold translate-x-9'>
                                    45
                                </p>
                                <p className='text-sm font-semibold translate-x-9'>
                                    45
                                </p>
                                <p className='text-sm font-semibold translate-x-9'>
                                    45
                                </p>
                                <p className='text-sm font-semibold translate-x-9'>
                                    45
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* ROW FOOTER */}
                    <div className='AccordionContentFooter' style={{ borderColor: rgba }}>
                        <div className="col-span-3">
                            <p className='text-gray-2 text-sm'>
                                Formula
                            </p>
                        </div>
                        <div className="col-span-6">
                            <p className='text-black text-sm'>
                                &nbsp;
                            </p>
                        </div>
                        <div className="col-span-3">
                            <p className='text-gray-2 text-sm'>
                                7545+45+45= 250.00
                            </p>
                        </div>
                    </div>
                </Accordion.Content>
            </Accordion.Item>
            {/* ROW CONTENT */}
            <Accordion.Item className='AccordionItem' value="item-5">
                <Accordion.Header className='AccordionHeader' style={{ color: rgb, backgroundColor: rgba, borderColor: color }}>
                    <div className="col-span-3">
                        <h4 className='text-black'>
                            Community
                        </h4>
                    </div>
                    <div className="col-span-7">
                        <h4 className='text-black'>
                            Earn a wage during the internship
                        </h4>
                    </div>
                    <div className="col-span-2 flex items-center gap-x-8">
                        <h4 className='text-sm font-semibold text-black'>
                            $250.00
                        </h4>
                        <Accordion.Trigger onClick={(e) => getDataState(e)} className="AccordionTrigger" style={{ backgroundColor: color }}>
                            <ChevronRightIcon className="AccordionChevron" aria-hidden />
                        </Accordion.Trigger>
                    </div>
                </Accordion.Header>
                {/* DESCRIPTION */}
                <Accordion.Content className="AccordionContent" style={{ backgroundColor: rgba, borderColor: color }}>
                    <div className='AccordionContentChildren' style={{ borderColor: color }}>
                        <div className="col-span-3">
                            <p className='text-black text-sm'>
                                Proxy
                            </p>
                        </div>
                        <div className="col-span-7">
                            <div className='space-y-2'>
                                <p className='text-black text-sm'>
                                    Number of students who helped by the internship to choose a college major
                                </p>
                                <p className='text-black text-sm'>
                                    Number of students who helped by the internship to choose a college major
                                </p>
                                <p className='text-black text-sm'>
                                    Number of students who helped by the internship to choose a college major
                                </p>
                                <p className='text-black text-sm'>
                                    Number of students who helped by the internship to choose a college major
                                </p>
                                <p className='text-black text-sm'>
                                    Number of students who helped by the internship to choose a college major
                                </p>
                            </div>
                        </div>
                        <div className="col-span-2">
                            <div className='space-y-2'>
                                <p className='text-sm font-semibold translate-x-9'>
                                    45
                                </p>
                                <p className='text-sm font-semibold translate-x-9'>
                                    45
                                </p>
                                <p className='text-sm font-semibold translate-x-9'>
                                    45
                                </p>
                                <p className='text-sm font-semibold translate-x-9'>
                                    45
                                </p>
                                <p className='text-sm font-semibold translate-x-9'>
                                    45
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* ROW FOOTER */}
                    <div className='AccordionContentFooter' style={{ borderColor: rgba }}>
                        <div className="col-span-3">
                            <p className='text-gray-2 text-sm'>
                                Formula
                            </p>
                        </div>
                        <div className="col-span-6">
                            <p className='text-black text-sm'>
                                &nbsp;
                            </p>
                        </div>
                        <div className="col-span-3">
                            <p className='text-gray-2 text-sm'>
                                7545+45+45= 250.00
                            </p>
                        </div>
                    </div>
                </Accordion.Content>
            </Accordion.Item>
        </Accordion.Root>
    )
}