import  React  from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import CreateNewsModal from '../Components/CreateNewsModal'

const DashboardNews = () => {

    return (
        <DashboardLayout>
            {/* Create News Header section start  */}
            <section className='createnews-header'>
              <h2> All News  </h2>
              <CreateNewsModal/>
            </section>
        </DashboardLayout>
    );
};

export default DashboardNews;