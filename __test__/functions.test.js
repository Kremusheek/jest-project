const { ageClassification, weekFn } = require('./functions')

describe('ageClassification', () => {
  test('returns null for age -1', () => {
    expect(ageClassification(-1)).toBeNull()
  })

  test('returns null for age 0', () => {
    expect(ageClassification(0)).toBeNull()
  })

  test('returns "Дитинство" for age 1', () => {
    expect(ageClassification(1)).toBe('Дитинство')
  })

  test('returns "Дитинство" for age 24', () => {
    expect(ageClassification(24)).toBe('Дитинство')
  })

  test('returns "Молодість" for age 24.01', () => {
    expect(ageClassification(24.01)).toBe('Молодість')
  })

  test('returns "Молодість" for age 44', () => {
    expect(ageClassification(44)).toBe('Молодість')
  })

  test('returns "Зрілість" for age 44.01', () => {
    expect(ageClassification(44.01)).toBe('Зрілість')
  })

  test('returns "Зрілість" for age 65', () => {
    expect(ageClassification(65)).toBe('Зрілість')
  })

  test('returns "Старість" for age 65.1', () => {
    expect(ageClassification(65.1)).toBe('Старість')
  })

  test('returns "Старість" for age 75', () => {
    expect(ageClassification(75)).toBe('Старість')
  })

  test('returns "Довголіття" for age 75.01', () => {
    expect(ageClassification(75.01)).toBe('Довголіття')
  })

  test('returns "Довголіття" for age 90', () => {
    expect(ageClassification(90)).toBe('Довголіття')
  })

  test('returns "Рекорд" for age 90.01', () => {
    expect(ageClassification(90.01)).toBe('Рекорд')
  })

  test('returns "Рекорд" for age 122', () => {
    expect(ageClassification(122)).toBe('Рекорд')
  })

  test('returns null for age 122.01', () => {
    expect(ageClassification(122.01)).toBeNull()
  })

  test('returns null for age 150', () => {
    expect(ageClassification(150)).toBeNull()
  })
})

describe('weekFn', () => {
  test('returns "Понеділок" for 1', () => {
    expect(weekFn(1)).toBe('Понеділок')
  })

  test('returns "Вівторок" for 2', () => {
    expect(weekFn(2)).toBe('Вівторок')
  })

  test('returns "Середа" for 3', () => {
    expect(weekFn(3)).toBe('Середа')
  })

  test('returns "Четвер" for 4', () => {
    expect(weekFn(4)).toBe('Четвер')
  })

  test('returns "П\'ятниця" for 5', () => {
    expect(weekFn(5)).toBe('П\'ятниця')
  })

  test('returns "Субота" for 6', () => {
    expect(weekFn(6)).toBe('Субота')
  })

  test('returns "Неділя" for 7', () => {
    expect(weekFn(7)).toBe('Неділя')
  })

  test('returns null for 9', () => {
    expect(weekFn(9)).toBeNull()
  })

  test('returns null for 0', () => {
    expect(weekFn(0)).toBeNull()
  })

  test('returns null for 1.5', () => {
    expect(weekFn(1.5)).toBeNull()
  })

  test('returns null for string "2"', () => {
    expect(weekFn('2')).toBeNull()
  })

  test('returns null for undefined', () => {
    expect(weekFn(undefined)).toBeNull()
  })
})