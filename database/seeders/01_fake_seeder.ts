import { CineastFactory } from '#database/factories/cineast_factory'
import { MovieFactory } from '#database/factories/movie_factory'
import { UserFactory } from '#database/factories/user_factory'
import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { DateTime } from 'luxon'
import MovieStatuses from '#enums/movie_statuses'
import { movies } from '#database/data/movies'

export default class extends BaseSeeder {
  static environment = ['development']

  async run() {
    await CineastFactory.createMany(10)
    await UserFactory.createMany(5)
    await this.#createMovies()
  }

  async #createMovies() {
    let index = 0
    await MovieFactory.tap((row, { faker }) => {
      const movie = movies[index]

      row.statusId = MovieStatuses.RELEASED
      row.title = movie.title
      const released = DateTime.fromJSDate(
        faker.date.between({
          from: DateTime.fromISO('1970-01-01').toJSDate(),
          to: DateTime.now().toJSDate(),
        })
      )

      row.releasedAt = released

      index++
    }).createMany(movies.length)

    await MovieFactory.createMany(3)

    await MovieFactory.apply('released').createMany(2)
    await MovieFactory.apply('releasingSoon').createMany(2)
    await MovieFactory.apply('postProduction').createMany(2)
  }
}
