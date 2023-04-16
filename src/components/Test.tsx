import React from "react";
import * as M from "@mantine/core";

export default function Test() {
  const [File, setFile] = React.useState<File | null>();
  const [File64, setFile64] = React.useState<string>();
  // const [FIleConvert, setFIleConvert] = React.useState<HTMLImageElement>();

  console.log(File);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const imageFile = File;
    const fileReader = new FileReader();
    fileReader.onload = () => {
      const srcData = fileReader.result;
      const code = srcData?.toString();
      setFile64(code);
      console.log("base64:", srcData);
    };
    fileReader.readAsDataURL(imageFile!);
    let image = new Image();
    image.src = File64!;
  };

  return (
    <M.Box>
      <div>Test</div>

      <form onSubmit={handleSubmit}>
        <M.FileInput
          placeholder="imagen"
          label="tu imagen"
          withAsterisk
          onChange={setFile}
        />
        <M.Button type="submit"></M.Button>
      </form>
      <M.Image width={200} src={File64} />
    </M.Box>
  );
}
