import MovieStatuses from '#enums/movie_statuses'
import { BaseModel, beforeCreate, column } from '@adonisjs/lucid/orm'
import { DateTime } from 'luxon'
import { scope } from '@adonisjs/lucid/orm'
import string from '@adonisjs/core/helpers/string'

export default class Movie extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare statusId: number

  @column()
  declare writerId: number

  @column()
  declare directorId: number

  @column()
  declare title: string
  @column()
  declare slug: string
  @column()
  declare summary: string
  @column()
  declare abstract: string

  @column()
  declare posterUrl: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @column.dateTime()
  declare releasedAt: DateTime | null

  static released = scope((query) => {
    query.where((group) =>
      group
        .where('statusId', MovieStatuses.RELEASED)
        .whereNotNull('releasedAt')
        .where('releasedAt', '<=', DateTime.now().toSQL())
    )
  })

  static notReleased = scope((query) => {
    query.where((group) =>
      group
        .whereNot('statusId', MovieStatuses.RELEASED)
        .orWhereNull('releasedAt')
        .orWhere('releasedAt', '>', DateTime.now().toSQL())
    )
  })

  @beforeCreate()
  static async slugify(movie: Movie) {
    if (movie.slug) return

    const slug = string.slug(movie.title, {
      replacement: '-',
      lower: true,
      strict: true,
    })
    const rowws = await Movie.query()
      .select('slug')
      .whereRaw('lower(??) = ?', ['slug', slug])
      .orWhereRaw('lower(??) like ?', ['slug', `slug-%`])

      const incrementors = rowws.reduce((result,row) =>{
       const tokens = row.slug.toLowerCase().split(`${slug}-`)
    
       if (tokens.length < 2 ){

      }, [])
  }
}
