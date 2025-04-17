import { FC, JSX, useState } from "react";
import {
  SiReact,
  SiTypescript,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiJsonwebtokens,
  SiMysql,
  SiAngular,
} from "react-icons/si";
import { Modal } from "antd";

export interface Project {
  nombre: string;
  descripcion: string;
  tecnologias: string[];
  fechaInicio?: string;
  fechaFin?: string;
  estado: string;
  imagenes?: string[];
  linkRepositorio?: string;
  linkDemo?: string;
  caracteristicas: string[];
  dificultades?: string;
  aprendizajes?: string;
}

const iconMap: Partial<Record<string, JSX.Element>> = {
  React: <SiReact className="text-cyan-400" />,
  TypeScript: <SiTypescript className="text-blue-400" />,
  MongoDB: <SiMongodb className="text-green-400" />,
  "Node.js": <SiNodedotjs className="text-lime-400" />,
  Express: <SiExpress className="text-white" />,
  JWT: <SiJsonwebtokens className="text-yellow-400" />,
  MySQL: <SiMysql className="text-blue-300" />,
  Angular: <SiAngular className="text-red-500" />,
  "Angular.js": <SiAngular className="text-red-500" />,
};

const ProjectCard: FC<{ project: Project }> = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [projectSelect, setProjectSelect] = useState<Project>();

  const openModalImg = (project: Project) => {
    setIsModalOpen(true);
    setProjectSelect(project);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const zoomModal = () => {};

  return (
    <div className="bg-zinc-900 rounded-xl shadow-lg p-6 flex flex-col gap-4 w-full max-w-md min-h-130">
      <div className="flex justify-between items-center min-h-15">
        <h2 className="text-xl font-semibold text-white">{project.nombre}</h2>
        <span
          className={`text-sm ${
            project.estado == "Finalizado"
              ? "bg-green-500 hover:bg-green-600 text-white"
              : "bg-yellow-500 hover:bg-yellow-600 text-white"
          } text-white px-3 py-1 rounded-full`}
        >
          {project.estado || "Sin estado"}
        </span>
      </div>

      <p
        className="text-sm text-zinc-400 line-clamp-3 min-h-10"
        title={project.descripcion}
      >
        {project.descripcion}
      </p>

      <div className="flex flex-wrap gap-3 text-xl mt-2">
        {project.tecnologias.map((tech) => (
          <div key={tech} title={tech}>
            {iconMap[tech] ?? (
              <span className="text-zinc-400 text-sm">{tech}</span>
            )}
          </div>
        ))}
      </div>

      <div className="flex flex-col bg-zinc-900 rounded-xl shadow-lg overflow-hidden w-full max-w-md">
        {/* Imagen o galería de imágenes */}
        <div
          className="w-full h-48 bg-zinc-800 flex items-center justify-center overflow-hidden"
          onClick={() => openModalImg(project)}
        >
          <img
            src={`/images/${project.imagenes?.[0]}`}
            alt={project.nombre}
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mt-auto">
        {project.caracteristicas.map((tag) => (
          <span
            key={tag}
            className="text-sm bg-blue-400 text-white  px-3 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      <Modal
        title={projectSelect?.nombre}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null} // para que no ocupe espacio innecesario abajo
        width={800} // ajusta el ancho del modal
        bodyStyle={{ padding: 0 }} // elimina padding del contenido del modal
      >
        <div className="w-full h-[80vh] flex items-center justify-center bg-black">
          <img
            onMouseEnter={zoomModal}
            src={`/images/${projectSelect?.imagenes}`}
            alt="Imagen del proyecto"
            className="max-w-full max-h-full object-cover"
            id="#imgModal"
          />
        </div>
      </Modal>
    </div>
  );
};

export default ProjectCard;
