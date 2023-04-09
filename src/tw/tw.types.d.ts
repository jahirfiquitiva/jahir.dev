type AnyComponent<P = unknown> = ExoticComponent<P> | ComponentType<P>;

type KnownTarget = keyof JSX.IntrinsicElements | AnyComponent;

export type WebTarget = string | KnownTarget;
