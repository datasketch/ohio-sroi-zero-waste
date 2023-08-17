import * as Tabs from '@radix-ui/react-tabs';
import Table from './Table';


export default function TabSection({ color = '#00694E' }) {
    return (
        // TAB PARENT
        <Tabs.Root defaultValue="tab1" orientation="vertical">
            {/* TABS CHILDREN */}
            <Tabs.List className='u-container' aria-label="tabs">
                <Tabs.Trigger value="tab1" className="TabsTrigger" style={{ color }}>Dashboard</Tabs.Trigger>
                <Tabs.Trigger value="tab2" className="TabsTrigger" style={{ color }}>Outcome Chain</Tabs.Trigger>
                <Tabs.Trigger value="tab3" className="TabsTrigger" style={{ color }}>References</Tabs.Trigger>
            </Tabs.List>
            {/* TABS CONTENT */}
            <Tabs.Content className='bg-anti-flash-white' value="tab1">
                <div className='pt-12 pb-9'>
                    <div className='u-container'>
                        <div className='space-y-12'>
                            {/* TABLE */}
                            <Table color={color} />
                            <Table color={color} />
                        </div>
                    </div>
                </div>
            </Tabs.Content>
            <Tabs.Content className='bg-anti-flash-white' value="tab2">
                <div className='pt-12 pb-9'>
                    <div className='u-container'>
                        Tab Outcome Chain
                    </div>
                </div>
            </Tabs.Content>
            <Tabs.Content className='bg-anti-flash-white' value="tab3">
                <div className='pt-12 pb-9'>
                    <div className='u-container'>
                        Tab References
                    </div>
                </div>
            </Tabs.Content>
        </Tabs.Root>
    )
}