import React from 'react'
import renderer from 'react-test-renderer'
import Card from './Card'

describe('Card', () => {
  it('should render a card', () => {
    const component = renderer.create(
      <Card
        picture="/picture"
        title="Card title"
        text="Card text"
        footer="Card footer"
      />,
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
