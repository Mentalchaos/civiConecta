export const getUnits = () => {
  const mockData = [
    {
      status: 'Completada',
      title: 'Unidad I',
      subtitle: 'Relaciones interpersonales',
      description: 'Fomentar trato respetuoso y solidario; rechazar violencia y discriminación en las relaciones.',
      color: 'unit-green',
      borderColor: 'border-green',
    },
    {
      status: 'En desarrollo',
      title: 'Unidad II',
      subtitle: 'Resolución de conflictos',
      description: 'Aplicar autónomamente estrategias para la resolución de conflictos.',
      color: 'unit-purple',
      borderColor: 'border-purple',
    },
    {
      status: 'Pendiente',
      title: 'Unidad III',
      subtitle: 'Bienestar y autocuidado',
      description:
        'Practicar en forma autónoma conductas protectoras y de autocuidado en relación a su cuerpo e intimidad.',
      color: 'unit-red',
      borderColor: 'border-red',
    },
    {
      status: 'Pendiente',
      title: 'Unidad IV',
      subtitle: 'Autorregulación',
      description: 'Reconocer y describir causas y consecuencias del consumo de drogas.',
      color: 'unit-red',
      borderColor: 'border-red',
    },
  ];

  return Promise.resolve(mockData);
};
