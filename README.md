# EERA-Product-Card

Este es un paquete de pruebas de despliegue en NPM

## Edgard Alas

## Ejemplo

´´´

          <ProductCard
               initialValues={{
                  count: 6,
                  maxCount: 10,
               }}
               product={product}
            >
               {({ reset, maxCount, increaseBy, isMaxCountReached }) => (
                  <>
                     <ProductImage />
                     <ProductTile />
                     <ProductButtons />
                  </>
               )}
            </ProductCard>

´´´
