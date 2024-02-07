import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'cloud',
  },
  cloud: {
    project: 'game/web-astro-keystatic',
  },
  ui: {
    brand: {
      name: 'Base de datos Videojuegos'
    },
  },
  collections: {
    caracteristicas: collection({
      label: 'Caracteristicas',
      slugField: 'title',
      format: {data:'json'},
      path: 'src/content/caracteristicas/*',
      schema: {
        title: fields.slug({name:{label:'Nombre'}})
      }
    }),
    plataformas: collection({
      label: 'Plataformas',
      slugField: 'title',
      format: 'json',
      path: 'src/content/plataformas/*',
      schema: {
        title: fields.slug({name:{label:'Nombre'}})
      }
    }),
    generos: collection({
      label: 'Generos',
      slugField: 'title',
      format: 'json',
      path: 'src/content/generos/*',
      schema: {
        title: fields.slug({name:{label:'Nombre'}})
      }
    }),
    vistas: collection({
      label: 'Vistas',
      slugField: 'title',
      format: 'json',
      path: 'src/content/vistas/*',
      schema: {
        title: fields.slug({name:{label:'Nombre'}})
      }
    }),
    companias: collection({
      label: 'Companias',
      slugField: 'title',
      format: 'json',
      path: 'src/content/companias/*',
      schema: {
        title: fields.slug({name:{label:'Nombre'}})
      }
    }),
    games: collection({
      label: 'Games',
      slugField: 'title',
      path: 'src/content/games/*',
      format: 'json',
      schema: {
        title: fields.slug({ name: { label: 'Titulo del Juego' } }),
        poster: fields.url({label:'Url del Poster'}),
        trailer: fields.url({label:'Url del trailer'}),
        description: fields.text({label:'Descripcion', multiline:true}),
        rec_min: fields.text({label:'Requisitos Minimos', multiline:true}),
        rec_rec: fields.text({label:'Requisitos Recomendados', multiline:true}),
        caracteristicas: fields.array(
          fields.relationship({
            label: 'Caracteristicas',
            description: 'Selecciona las caracteristicas',
            collection: 'caracteristicas'
          }), {
            label: 'Caracteristicas',
            itemLabel: props => props.value
          }
        ),
        plataformas: fields.array(
          fields.relationship({
            label: 'Plataformas',
            description: 'Selecciona las plataformas',
            collection: 'plataformas'
          }), {
            label: 'PLataformas',
            itemLabel: props => props.value
          }
        ),
        generos: fields.array(
          fields.relationship({
            label: 'Generos',
            description: 'Selecciona los Generos',
            collection: 'generos'
          }), {
            label: 'Generos',
            itemLabel: props => props.value
          }
        ),
        vistas: fields.array(
          fields.relationship({
            label: 'Vistas',
            description: 'Selecciona las Vistas',
            collection: 'vistas'
          }), {
            label: 'Vistas',
            itemLabel: props => props.value
          }
        ),
        companias: fields.array(
          fields.relationship({
            label: 'Companias',
            description: 'Selecciona las Companias',
            collection: 'companias'
          }), {
            label: 'Companias',
            itemLabel: props => props.value
          }
        ),
      },
    }),
  },
});
