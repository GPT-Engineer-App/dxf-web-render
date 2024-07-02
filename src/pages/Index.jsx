import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

const Index = () => {
  const [file, setFile] = useState(null);
  const [dxfContent, setDxfContent] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleUpload = () => {
    if (!file) {
      toast.error('Please select a DXF file to upload.');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const content = e.target.result;
      setDxfContent(content);
      // Here you would typically parse and render the DXF content
    };
    reader.readAsText(file);
  };

  return (
    <div className="container mx-auto p-4">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">DXF File Renderer</h1>
      </header>
      <section className="mb-8">
        <Label htmlFor="dxf-upload" className="block mb-2">Upload DXF File</Label>
        <Input id="dxf-upload" type="file" accept=".dxf" onChange={handleFileChange} />
        <Button onClick={handleUpload} className="mt-4">Upload</Button>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-4">Rendered DXF Content</h2>
        <div className="border p-4">
          {dxfContent ? (
            <pre>{dxfContent}</pre>
          ) : (
            <p>No DXF file uploaded yet.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Index;