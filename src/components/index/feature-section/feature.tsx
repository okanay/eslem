import { HomeIcon } from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Tellus semper adipiscing',
    description:
      'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
    icon: HomeIcon,
  },
  {
    name: 'Sit quis amet rutrum tellus',
    description:
      'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
    icon: HomeIcon,
  },
  {
    name: 'Quisque est vel vulputate cursus.',
    description:
      'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
    icon: HomeIcon,
  },
  {
    name: 'Tincidunt mattis aliquet hac quis',
    description:
      'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
    icon: HomeIcon,
  },
];

export const Feature = () => {
  return (
    <div className="bg-second-100 bg-noise py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-zinc-950">Başlamadan önce.</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-primary-600 sm:text-4xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
          <p className="mt-6 text-lg leading-8 text-zinc-700">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
            pulvinar et feugiat blandit at. In mi viverra elit.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map(feature => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-zinc-950">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-zinc-700">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

// Kanıta dayalı bir yaklaşım kullanıyoruz, böylece kendinizi daha iyi hissedebilirsiniz.
// Sağlıklı alışkanlıklar geliştirmeniz için size destek veriyoruz.
// Her vücut bir parmak izi kadar özel. İyileşme yolculuğunda sana en doğru yolu inşa etmek istiyoruz.
// Bu sayede, kişilerin hedeflerine ulaşmasına ve sağlıklı bir yaşam tarzı benimsemesine yardımcı olur.
