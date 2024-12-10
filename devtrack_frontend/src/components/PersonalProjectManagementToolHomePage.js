import React from 'react';

const PersonalProjectManagementToolHomePage = () => {
  return (
    // <div>

    //   <main>
    //     <section className="bg-gray-100 py-16">
    //       <div className="container mx-auto flex justify-center items-center">
    //         <div className="w-full md:w-1/2 pr-8">
    //           <h2 className="text-3xl font-bold mb-4">Manage Your Projects With Ease</h2>
    //           <p className="mb-6">Our Personal Project Management Tool helps you stay organized and on top of your projects. Create projects, maintain backlogs, and manage tasks all in one place.</p>
    //           <a href="#" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Get Started</a>
    //         </div>
    //         <div className="w-full md:w-1/2">
    //           <img src="/api/placeholder/600/400" alt="Project Management Dashboard" className="w-full rounded-lg shadow-lg" />
    //         </div>
    //       </div>
    //     </section>

    //     <section className="py-16">
    //       <div className="container mx-auto">
    //         <h2 className="text-3xl font-bold mb-8 text-center">Key Features</h2>
    //         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    //           <div className="bg-white rounded-lg shadow-lg p-6">
    //             <img src="/api/placeholder/100/100" alt="Create Projects" className="w-20 h-20 mb-4" />
    //             <h3 className="text-xl font-bold mb-2">Create Projects</h3>
    //             <p>Easily create and manage all your projects in one place.</p>
    //           </div>
    //           <div className="bg-white rounded-lg shadow-lg p-6">
    //             <img src="/api/placeholder/100/100" alt="Maintain Backlogs" className="w-20 h-20 mb-4" />
    //             <h3 className="text-xl font-bold mb-2">Maintain Backlogs</h3>
    //             <p>Keep track of your project tasks and priorities with a robust backlog system.</p>
    //           </div>
    //           <div className="bg-white rounded-lg shadow-lg p-6">
    //             <img src="/api/placeholder/100/100" alt="Manage Tasks" className="w-20 h-20 mb-4" />
    //             <h3 className="text-xl font-bold mb-2">Manage Tasks</h3>
    //             <p>Assign tasks, set deadlines, and monitor progress for all your projects.</p>
    //           </div>
    //         </div>
    //       </div>
    //     </section>
    //   </main>

    //   <footer className="bg-blue-500 text-white py-4">
    //     <div className="container mx-auto text-center">
    //       <p>&copy; 2023 Personal Project Management Tool. All rights reserved.</p>
    //     </div>
    //   </footer>
    // </div>
    <div>


  <main>

      <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 class="text-4xl font-bold mb-4">Manage Your Projects With Ease</h1>
          <p class="mb-8">
            Our Personal Project Management Tool helps you stay organized and on top of your projects. Create projects, maintain backlogs, and manage tasks all in one place.
          </p>
          <a href="/dashboard" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-md">
            Get Started
          </a>
        </div>

      </div>


    <section class="py-20">
      <div class="container mx-auto">
        <h2 class="text-3xl font-bold mb-12 text-center">Key Features</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <h3 class="text-xl font-bold mb-2">Create Projects</h3>
            <p>Easily create and manage all your projects in one place.</p>
          </div>
          <div class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <h3 class="text-xl font-bold mb-2">Maintain Backlogs</h3>
            <p>
              Keep track of your project tasks and priorities with a robust backlog system.
            </p>
          </div>
          <div class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <h3 class="text-xl font-bold mb-2">Manage Tasks</h3>
            <p>
              Assign tasks, set deadlines, and monitor progress for all your projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>

  <footer>
    <div>
      <p>&copy; 2023 Personal Project Management Tool. All rights reserved.</p>
    </div>
  </footer>
</div>
  );
};

export default PersonalProjectManagementToolHomePage;