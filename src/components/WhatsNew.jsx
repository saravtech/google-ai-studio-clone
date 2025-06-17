const cards = [
    {
      title: "Native speech generation",
      description: "Generate high quality text to speech with Gemini",
      img: "/hello.png",
      badge: "New",
    },
    {
      title: "Live audio-to-audio dialog",
      description: "Try Gemini's natural, real-time dialog with audio and video inputs",
      img: "/audio.png",
      badge: "New",
    },
    {
      title: "Native image generation",
      description: "Interleaved text-and-image generation with the new Gemini 2.0 Flash",
      img: "/horse.png",
    },
    {
      title: "Explore and co-develop apps",
      description: "See Gemini in action with interactive, open source examples",
      img: "/google.png",
    },
  ];
  
  const WhatsNew = () => {
    return (
      <div className="mt-12">
        <h3 className="text-md font-semibold mb-4 text-left text-gray-800">What's new</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {cards.map((card, index) => (
            <div key={index} className="flex items-start bg-blue-50 rounded-xl p-4 space-x-4">
              <img src={card.img} alt="" className="w-12 h-12 rounded-md object-cover" />
              <div className="text-left">
                <div className="flex items-center space-x-2">
                  <h4 className="font-semibold text-gray-900">{card.title}</h4>
                  {card.badge && (
                    <span className="text-xs bg-blue-600 text-white rounded-full px-2 py-0.5">
                      {card.badge}
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-600">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default WhatsNew;
  