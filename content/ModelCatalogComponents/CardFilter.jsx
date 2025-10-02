"use client";
import { useState } from "react";
import manifest from "content/assets/Manifest.json";
import { Card } from "./Card";
import { CardGroup } from "./CardGroup";
import { ButtonGroup } from "./ButtonGroup";
import { Input } from "./Input";

export default function CardsWithFilter() {
  const [query, setQuery] = useState("");
  const [platformView, setPlatformView] = useState("all");
  const [typeView, setTypeView] = useState("all");
  const [hardwareView, setHardwareView] = useState("all");

  const cards =
    manifest.models?.map((model) => {
      const buttons = [
        {
          label: "Download",
          href: model.zipUrl,
          tooltip: model.recordSize,
        },
        {
          label: "Model Repository",
          href: model.hfRepo,
        },
      ];

      if (model.name) {
        buttons.push({
          label: "> dpais model install --model " + model.name,
        });
      }
      
      return {
        title: model.model, 
        platform: model.platform,
        hardware: model.hardware,
        hardwareVendor: model.hardwareVendor,
        type: model.type,
        text: model.description,
        tagline: model.tagline,
        recordSize: model.recordSize,
        modelSize: model.modelSize,
        languages: model.supportedLanguages,
        buttons: buttons,
        details: [
          { icon: "model", text: model.modelSize },
          { icon: "license", text: model.license ?? "Apache 2.0" },
          { icon: "platform", text: "9 Platforms" },
        ],
      };
    }) || [];

  const filteredCards = cards.filter(
    (card) =>
      card.title.toLowerCase().includes(query.toLowerCase()) &&
      (platformView === "all" ||
        card.platform.toLowerCase() === platformView.toLowerCase()) &&
      (typeView === "all" || card.type === typeView) &&
      (hardwareView === "all" || card.hardware === hardwareView)
  );
  
  const installerButtons = [
    {
      label: "x64 Client",
      href: manifest.coreinstallurl.X64,
    },
    {
      label: "arm64 Client",
      href: manifest.coreinstallurl.ARM64,
    },
  ];

  const platformButtons = [
    {
      label: "All",
      onClick: () => setPlatformView("all"),
      isActive: platformView === "all",
    },
    {
      label: "x64",
      onClick: () => setPlatformView("x64"),
      isActive: platformView === "x64",
    },
    {
      label: "arm64",
      onClick: () => setPlatformView("arm64"),
      isActive: platformView === "arm64",
    },
  ];

  const typeButtons = [
    {
      label: "All",
      onClick: () => setTypeView("all"),
      isActive: typeView === "all",
    },
    {
      label: "Transcription",
      onClick: () => setTypeView("Transcription"),
      isActive: typeView === "Transcription",
    },
    {
      label: "LLM",
      onClick: () => setTypeView("LLM"),
      isActive: typeView === "LLM",
    },
    {
      label: "Embedding",
      onClick: () => setTypeView("Embedding"),
      isActive: typeView === "Embedding",
    },
  ];

  const hardwareButtons = [
    {
      label: "All",
      onClick: () => setHardwareView("all"),
      isActive: hardwareView === "all",
    },
    {
      label: "CPU",
      onClick: () => setHardwareView("CPU"),
      isActive: hardwareView === "CPU",
    },
    {
      label: "NPU",
      onClick: () => setHardwareView("NPU"),
      isActive: hardwareView === "NPU",
    },
    {
      label: "GPU",
      onClick: () => setHardwareView("GPU"),
      isActive: hardwareView === "GPU",
    },
  ];

  return (
    <div className="space-y-4">

        <h4 id="install" className="x:tracking-tight x:text-slate-900 x:dark:text-slate-100 x:font-semibold x:target:animate-[fade-in_1.5s] x:mt-8 x:text-xl">Install Dell Pro AI Studio Client<a href="#install-dell-pro-ai-studio-clientinstaller-here" className="x:focus-visible:nextra-focus subheading-anchor"></a></h4>
      <div>
        <ButtonGroup buttons={installerButtons} />
      </div>

      <Input
        type="text"
        placeholder="Search by model..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <div className="px-4">
        <ButtonGroup buttons={platformButtons} />
      </div>

      <div className="px-4">
        <ButtonGroup buttons={typeButtons} />
      </div>

      <div className="px-4">
        <ButtonGroup buttons={hardwareButtons} />
      </div>

      <CardGroup>
        {filteredCards.map((card, idx) => (
          <Card key={idx} {...card} />
        ))}
        {filteredCards.length < 1 && (
          <p className="mt-4">No results found</p>
        )}
      </CardGroup>
    </div>
  );
}
