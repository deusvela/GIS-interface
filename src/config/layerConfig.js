export const LAYER_GROUPS = [
  {
    id: 'base',
    name: 'Базовые слои',
    layers: [
      {
        id: 'map',
        name: 'Схема',
        type: 'map',
        icon: 'Map'
      },
      {
        id: 'satellite',
        name: 'Спутник',
        type: 'satellite',
        icon: 'Satellite'
      },
      {
        id: 'hybrid',
        name: 'Гибрид',
        type: 'hybrid',
        icon: 'Layers'
      }
    ]
  },
  {
    id: 'cadastral',
    name: 'Кадастровые границы',
    layers: [
      {
        id: 'parcels',
        name: 'Земельные участки',
        type: 'cadastral_parcels',
        icon: 'Square'
      },
      {
        id: 'buildings',
        name: 'Здания и сооружения',
        type: 'cadastral_buildings',
        icon: 'Home'
      },
      {
        id: 'zones',
        name: 'Кадастровые кварталы',
        type: 'cadastral_zones',
        icon: 'Grid'
      }
    ]
  },
  {
    id: 'thematic',
    name: 'Тематические слои',
    layers: [
      {
        id: 'construction',
        name: 'Объекты незавершенного строительства',
        type: 'construction',
        icon: 'Construction'
      },
      {
        id: 'infrastructure',
        name: 'Инженерная инфраструктура',
        type: 'infrastructure',
        icon: 'Pipeline'
      },
      {
        id: 'development',
        name: 'Территории развития',
        type: 'development',
        icon: 'TreePine'
      }
    ]
  }
];