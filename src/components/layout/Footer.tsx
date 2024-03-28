import { FaCodepen, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-6xl font-medium text-lg w-full mx-auto p-10 xl:px-10 lg:py-10 flex items-center justify-between text-secondary-100 dark:text-gray-100/90">
      <a href="https://rodyhuancas.netlify.app/" target="_blank" aria-label="Ver portafolio de Rody Huancas">
        Rody Huancas
      </a>

      <div className="flex items-center gap-4">
        <a href="https://github.com/rody-huancas" target="_blank" className="rounded-full bg-secondary-100/90 dark:bg-gray-100/90 dark:text-secondary-100 p-2 text-gray-100" aria-label="Ver repositorio en GitHub">
          <FaGithub />
        </a>
        <a href="https://codepen.io/rodyhuancas" target="_blank" className="rounded-full bg-secondary-100/90 dark:bg-gray-100/90 dark:text-secondary-100 p-2 text-gray-100" aria-label="Ver codepen en GitHub">
          <FaCodepen />
        </a>
      </div>
    </div>
  )
}

export default Footer