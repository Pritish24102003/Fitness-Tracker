import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense
import numpy as np

# Define your input and output dimensions
input_dim = 10  # Example input dimension, adjust according to your data
output_dim = 5  # Example output dimension, adjust according to your data

# Example dataset (Replace with your actual dataset)
# Creating dummy dataset for illustration
train_data = np.random.rand(1000, input_dim)
train_labels = tf.keras.utils.to_categorical(np.random.randint(output_dim, size=(1000, 1)), num_classes=output_dim)
val_data = np.random.rand(200, input_dim)
val_labels = tf.keras.utils.to_categorical(np.random.randint(output_dim, size=(200, 1)), num_classes=output_dim)

# Define model architecture
model = Sequential([
    Dense(128, activation='relu', input_shape=(input_dim,)),
    Dense(64, activation='relu'),
    Dense(output_dim, activation='softmax')
])

# Compile the model
model.compile(optimizer='adam', loss='categorical_crossentropy', metrics=['accuracy'])

# Train the model
model.fit(train_data, train_labels, epochs=10, validation_data=(val_data, val_labels))

# Save the model
model.save('symptom_checker_model.h5')
