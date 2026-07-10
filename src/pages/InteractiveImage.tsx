"use client";

import Image from "next/image";
import img1 from "@/assets/ab900.jpg";

export default function MachineImage() {
  return (
    <div className="w-full max-w-md mx-auto"> {/* div menor */}
      <img
        src={img1}
        alt="Máquina AB 900"
        width={900}      // largura do arquivo original (ajuste se quiser)
        height={600}     // altura do arquivo original
        className="rounded-2xl shadow-lg object-contain w-full h-auto"
      />
    </div>
  );
}
