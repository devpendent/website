import { render } from '@testing-library/react'
import { useStaticQuery } from 'gatsby'
import React from 'react'
import Image from '../image'

describe('Image', () => {
  beforeEach(() => {
    useStaticQuery.mockReturnValueOnce({
      placeholderImage: {
        childImageSharp: {
          fluid: {
            aspectRatio: 1,
            base64:
              'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAACYklEQVQ4y42Uy28SQRjA+dM8efDmwYN6qF6qiSY+Y/WgQRMibY00TaWNBSRSCraYQtHl/bR0KyxQWCgWWAqU8izl/Sq7rLNsRHlVJpvJtzPfb77nDIOcZHSoqZSrp4+KtXIziubaLRysMCZiCYqOoVnhjNEi8RcztdxxeTzc6VBfT+5O2Vhpb+vw4wMdZ0ppWvP9xzLeJoDNThf2W+Nz1+XzNxQubSToSKKW+BDc+WOnkshhSVgeCiGpViZMEg1oxc26Knt+ae3bEtJTZwzE1kXLccG0+sOOlrcvZXvsczPkITfsa20vwIKnhsh+BnjUarT74Gb13CY7KBVJMv3z4N1NszQYsMWM62HNrCis/GxXn0iYls23uz5LPBcv0bH8hUH2XRoM85ySXv7JBtO87jMIvWq+H5GoYIHCLA1ZxD6Qap3Ak8IKfW7TJ50lK6uP9E6RgndHaODtCJ6Z5RyHfnE7j6gRbcKlCYNSt+rtETHTpUGgEP8FYmdNqd/Mo7aiVWTfuH2L9xASvfxxlqr01EYkrJszvNkgW9bH0OuFr+99m+y9IOeyU6zIp/Hubp/yMEztlzFPwOhdvq+nIoS1JNn4t2sugCmVsDvPe2KKolnZLCxhOcAKQRDDXTQaVi46lqYhIBwHTrl3oWqhMRDtaJge37lOBMKo4tfbqhVX0J7snTsWps8uZWuoOQY6CcjpSIF55UvmqNgr5wUwtV1IVdnXtnSfPEB2qjDNqnvczRl0m+j6Jn5lXb6nAQJqinmN0ZEBj03YLzghY8PnTRz80o/GRJZpOLCb0PM9BN7pvUEjx28V00WUg9jIVwAAAABJRU5ErkJggg==',
            sizes: '(max-width: 300px) 100vw, 300px',
            src:
              '/static/6d91c86c0fde632ba4cd01062fd9ccfa/fbe2f/gatsby-astronaut.png',
            srcSet:
              '/static/6d91c86c0fde632ba4cd01062fd9ccfa/e1fed/gatsby-astronaut.png 75w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/08283/gatsby-astronaut.png 150w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/fbe2f/gatsby-astronaut.png 300w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/59257/gatsby-astronaut.png 450w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/26d9e/gatsby-astronaut.png 600w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/a3fa0/gatsby-astronaut.png 800w'
          }
        }
      }
    })
  })

  it('renders correctly', () => {
    const { container } = render(<Image />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
