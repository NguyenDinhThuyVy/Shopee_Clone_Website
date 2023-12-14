import RegisterHeader from 'src/components/RegisterHeader'

interface Props {
  children?: React.ReactNode
}
function RegisterLayout({ children }: Props) {
  return (
    <div>
      <RegisterHeader />
      {children}
    </div>
  )
}

export default RegisterLayout
