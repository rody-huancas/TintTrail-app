const TaskList = ({ primaryColor, secondaryColor }: { primaryColor: string; secondaryColor: string }) => {
  // Array de tareas
  const tasks = [
    { id: 1, title: 'Desarrollo de App', description: 'Crear una aplicación utilizando React.js y Tailwind CSS' },
    { id: 2, title: 'Autenticación', description: 'Añadir funcionalidad de inicio de sesión y registro' },
  ];

  return (
    <div className="flex flex-col gap-5 text-white">
      {tasks.map(task => (
        <div key={task.id} className="flex flex-col gap-3 p-5 rounded-lg border-b-4" style={{backgroundColor: secondaryColor, borderColor: primaryColor}}>
          <div className="flex items-center justify-between">
            <h4>{task.title}</h4>
            <div className="p-2 rounded-full bg-gray-100" style={{color: secondaryColor}}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={`M9 5l7 7-7 7`} />
              </svg>
            </div>
          </div>
          <p className="text-sm">{task.description}</p>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
