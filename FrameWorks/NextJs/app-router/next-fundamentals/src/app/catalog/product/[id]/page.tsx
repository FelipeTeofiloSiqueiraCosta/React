'use client'

export default function Product({ params }: { params: { id: string } }) {
  console.log('test')
  return <>prod: {params.id}</>
}
